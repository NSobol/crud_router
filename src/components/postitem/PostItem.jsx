import React from "react";
import "../../images/user2.jpg";

function PostItem(props) {
  const { post } = props;
  return (
    <div>
      <div className="header">
        <img src="../../images/user2.jpg" alt="Avatar" />
        <p>Ilnaz Gilyazov</p>
        <p>Основатель группы</p>
      </div>

      <p>{post}</p>
    </div>
  );
}

export default PostItem;
