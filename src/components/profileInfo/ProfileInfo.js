// import classes from "*.module.css";
import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div >
        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" />
      </div>
      <div className={classes.descriptionBlock}>ava + decs</div>
    </div>
  );
};

export default ProfileInfo;
