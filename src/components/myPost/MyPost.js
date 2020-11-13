import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Post from "../post/Post";
import classes from "./MyPost.module.css";

const MyPost = ({ id, post, likesCount }) => {
  const postList = useSelector(
    (state) => state.profile.posts,
    shallowEqual
  );
  const postElements = postList.map((p) => (
    <Post key={id} post={post} likesCount={likesCount} />
  ));
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPost;
