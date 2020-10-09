import React from "react";
import MyPost from "../myPost/MyPost";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" />
      </div>
      <div>ava + decs</div>
      <MyPost />
    </div>
  );
};

export default Profile;
