import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import UserItem from "./UserItem";
import {
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  toggleFetch,
} from "../../redux/action/UserAction";
import classes from "./Users.module.css";
import Spinner from "../common/Loader";
import { getUsers, getUsersPage } from "../../api/users-api";
import Paginator from "../common/Paginator/Paginator";

const UsersList = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.user.users);

  const pageSize = useSelector((state) => state.user.pageSize, shallowEqual);

  const totalUsersCount = useSelector(
    (state) => state.user.totalUsersCount,
    shallowEqual
  );

  const currentPage = useSelector(
    (state) => state.user.currentPage,
    shallowEqual
  );

  const isFetching = useSelector(
    (state) => state.user.isFetching,
    shallowEqual
  );

  useEffect(() => {
    dispatch(toggleFetch(true));
    getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleFetch(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUserCount(data.totalCount));
    });
  }, []);

  const onPageChanged = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleFetch(true));

    getUsersPage(pageNumber, pageSize).then((data) => {
      dispatch(toggleFetch(false));
      dispatch(setUsers(data.items));
    });
  };

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const userElements = userList.map((u) => (
    <UserItem
      key={u.id}
      id={u.id}
      user={u}
      followed={u.followed}
      fullname={u.name}
    />
  ));

  const checkLoader = isFetching ? <Spinner /> : null;

  return (
    <div className={classes.list}>
      {checkLoader}
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>{userElements}</div>
    </div>
  );
};

export default UsersList;
