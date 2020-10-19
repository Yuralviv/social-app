import React from "react";
import { followAction, unfollowAction } from "../../redux/action/UserAction";
import { useDispatch } from "react-redux";
import userPhoto from "../../assets/image/user.png";
import classes from "./Users.module.css";

const UserItem = ({ user, fullname, status, followed, location }) => {
  const dispatch = useDispatch();

  const userPtoto = user.photos.small != null ? user.photos.small : userPhoto;

  return (
    <div>
      <span>
        <div>
          <img className={classes.userPhoto} src={userPhoto} alt='#' />
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
