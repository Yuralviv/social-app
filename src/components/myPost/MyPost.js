import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Post from "../post/Post";
import classes from "./MyPost.module.css";

const MyPost = ({ id, post, likesCount }) => {
  const postList = useSelector(
    (state) => state.profileReducer.posts,
    shallowEqual
  );
  const postElements = postList.map((p) => (
    <Post key={p.id} post={p.post} likesCount={p.likesCount} />
  ));
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPost;
