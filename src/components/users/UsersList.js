import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as axios from "axios";
import UserItem from "./UserItem";
import {
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  toggleFetch,
} from "../../redux/action/UserAction";
import classes from "./Users.module.css";
import Spinner from "../common/Loader";

const UsersList = () => {
  const userList = useSelector((state) => state.userReducer.users);

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

  const isFetching = useSelector(
    (state) => state.userReducer.isFetching,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleFetch(true));
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        dispatch(toggleFetch(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUserCount(response.data.totalCount));
      });
  }, []);

  const onPageChanged = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleFetch(true));
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`
      )
      .then((response) => {
        dispatch(toggleFetch(false));
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

  const checkLoader = isFetching ? <Spinner /> : null;

  return (
    <div>
      {checkLoader}
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