import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as axios from "axios";
import UserItem from "./UserItem";
import {
  setUsers,
  setCurrentPage,
  setTotalUserCount,
} from "../../redux/action/UserAction";
import classes from "./Users.module.css";

const UsersList = () => {
  const userList = useSelector(
    (state) => state.userReducer.users,
  );

  const pageSize = useSelector(
    (state) => state.userReducer.pageSize,
    shallowEqual
  );

  const totalUsersCount = useSelector(
    (state) => state.userReducer.totalUsersCount,
    shallowEqual
  );

  const currentPage = useSelector(
    (state) => state.userReducer.currentPage,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUserCount(response.data.totalCount));
      });
  }, []);

  const onPageChanged = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`
      )
      .then((response) => {
        dispatch(setUsers(response.data.items));
      });
  };

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const userElements = userList.map((u) => (
    <UserItem key={u.id} user={u} followed={u.followed} fullname={u.name} />
  ));

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            key={p}
            className={currentPage === p && classes.selectedPage}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {` ${p}  `}
          </span>
        ))}
      </div>
      <div>{userElements}</div>
    </div>
  );
};

export default UsersList;
