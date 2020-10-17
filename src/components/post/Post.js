import React from "react";
import classes from "./Post.module.css";

const Post = ({post,likesCount}) => {
  // console.log(props.message);

  return (
    <div className={classes.item}>
      <img
        src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        alt="imgitem"
      />
      {post}
      <span>like</span><span>{likesCount}</span>
    </div>
  );
};

export default Post;
