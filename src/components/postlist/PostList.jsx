import React from "react";

function PostList(props) {
  const { posts } = props;
	return (
    <ul className="posts-list">
      {posts.map((post, index) => {
        return (
          <li className="posts-list-item" key={index}>
            <img src={post.img} alt={"post.category"} />
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
