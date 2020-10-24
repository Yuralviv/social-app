// import classes from "*.module.css";
import React from "react";
import Spinner from "../common/Loader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = ({ profile }) => {
  if (!profile) {
    return <Spinner />;
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large} />
        <div>
          <div>fullname:</div> <span> {profile.fullName} </span>
        </div>
        <div>
          <div>about me:</div>
          <span> {profile.aboutMe} </span>
        </div>
        <div>
          <div>contacts:</div>
          <ul>
            <li>
              <span>facebook: </span>
              <a href="#">{profile.contacts.facebook}</a>
            </li>
            <li>
              <span>vk: </span>
              <a href="#">{profile.contacts.vk}</a>
            </li>
            <li>
              <span>twitter: </span>
              <a href="#">{profile.contacts.twitter}</a>
            </li>
            <li>
              <span>github: </span>
              <a href="#">{profile.contacts.github}</a>
            </li>
            <li>
              <span>instagram: </span>
              <a href="#">{profile.contacts.instagram}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
