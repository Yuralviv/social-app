import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as axios from "axios";
import UserItem from "./UserItem";
import { setUsers } from "../../redux/action/UserAction";

const UsersList = (props) => {
  const dispatch = useDispatch();

  const userList = useSelector(
    (state) => state.userReducer.users,
    shallowEqual
  );

    if(userList.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        dispatch(setUsers(response.data.items))
      })
    }

  const userElements = userList.map((u) => (
    <UserItem
      key={u.id}
      user={u}
      followed={u.followed}
      fullname={u.name}
    />
  ));
  return (
    <div>
      <div>{userElements}</div>
    </div>
  );
};

export default UsersList;
