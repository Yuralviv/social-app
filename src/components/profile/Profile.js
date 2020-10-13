import React from "react";
import MyPost from "../myPost/MyPost";
import ProfileInfo from "../profileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
       <ProfileInfo />
      <MyPost />
    </div>
  );
};

export default Profile;
