import React from "react";
import Post from "../post/Post"
import classes from "./MyPost.module.css";

const MyPost = () => {
  return (
    <div>
      Post
      <div>
        <textarea></textarea>
        <button>add post </button>
      </div>
      <Post />
    </div>
  );
};

export default MyPost;
