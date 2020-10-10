import React from "react";
import classes from "./Post.module.css";

const Post = ({message}) => {

  // console.log(props.message);

  return (
    <div className={classes.item}>
      <img
        src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        alt="imgitem"
      />
      {message}
      <span>like</span>
    </div>
  );
};

export default Post;
