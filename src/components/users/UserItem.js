import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { followAction, unfollowAction } from "../../redux/action/UserAction";
import * as axios from "axios";
import userPhoto from "../../assets/image/user.png";
import classes from "./Users.module.css";

const UserItem = ({ user, id, fullname, status, followed }) => {
  const dispatch = useDispatch();

  const userPtoto = user.photos.small != null ? user.photos.small : userPhoto;

  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + id}>
            <img className={classes.userPhoto} src={userPtoto} alt="#" />
          </NavLink>
        </div>
        <div>
          {followed ? (
            <button
              onClick={() => {
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "d968498d-d55e-428b-97bf-90a5c51321bb",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      dispatch(unfollowAction(user.id));
                    }
                  });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                axios
                  .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                    {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "d968498d-d55e-428b-97bf-90a5c51321bb",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      dispatch(followAction(user.id));
                    }
                  });
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
