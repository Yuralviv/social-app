import React from "react";
import Post from "../post/Post";
import classes from "./MyPost.module.css";

const MyPost = (postsElements) => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      {/* <AddPostForm onSubmit={onAddPost}/> */}
      <div className={classes.posts}>
        <Post />
      </div>
    </div>
  );
};

export default MyPost;
