import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { followAction, unfollowAction } from "../../redux/action/UserAction";
import userPhoto from "../../assets/image/user.png";
import classes from "./Users.module.css";

const UserItem = ({ user, id, fullname, status, followed, location }) => {
  const dispatch = useDispatch();

  const userPtoto = user.photos.small != null ? user.photos.small : userPhoto;

  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + id}>
            <img className={classes.userPhoto} src={userPtoto} alt="#" />
          </NavLink>
        </div>
        <div>
          {followed ? (
            <button
              onClick={() => {
                dispatch(unfollowAction(user.id));
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(followAction(user.id));
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{fullname}</div>
          <div>{status}</div>
        </span>
      </span>
    </div>
  );
};

export default UserItem;
