import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import * as axios from "axios";
import UserItem from "./UserItem";

const UsersList = (props) => {
  const userList = useSelector(
    (state) => state.userReducer.users,
    shallowEqual
  );


  const userElements = userList.map((u) => (
    <UserItem
      key={u.id}
      user={u}
      followed={u.followed}
      fullname={u.fullname}
      status={u.status}
      location={u.location}
    />
  ));
  return (
    <div>
      <div>{userElements}</div>
    </div>
  );
};

export default UsersList;
