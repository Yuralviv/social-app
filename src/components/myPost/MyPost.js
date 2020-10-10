import React from "react";
import Post from "../post/Post"
import classes from "./MyPost.module.css";

const MyPost = () => {
  return (
    <div className={classes.postsBlock}>
      Post
      <div className={classes.posts}>
        <textarea></textarea>
        <button>add post </button>
      </div>
      <Post message='hi post' />
    </div>
  );
};

export default MyPost;
