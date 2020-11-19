import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as axios from "axios";
import { useParams } from "react-router-dom";
import { setUserProfile } from "../../redux/action/profileAction";
import MyPost from "../myPost/MyPost";
import ProfileInfo from "../profileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = () => {
  const myId = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.profile, shallowEqual);
  let userId = useParams();

  useEffect(() => {
    if (!userId.id) {
      userId = myId;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId.id}`)
      .then((response) => {
        dispatch(setUserProfile(response.data));
      });
  }, [userId]);

  return (
    <div className={classes.content}>
      <ProfileInfo profile={profile} />
      <MyPost />
    </div>
  );
};

export default Profile;
