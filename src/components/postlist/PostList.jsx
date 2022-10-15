import React from "react";
import PostItem from "../postitem/PostItem";

function PostList(props) {
  const { posts } = props;
  if (posts === undefined || posts.length === 0) {
    return null;
  } else {
    return (
      <ul className="posts-list">
        {posts.map((post, index) => {
          return (
            <li className="posts-list-item" key={index}>
              <PostItem post={post.text} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PostList;
