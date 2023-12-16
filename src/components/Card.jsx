import React from "react";

const Card = ({ post }) => {
  return (
    <div className="md:w-[480px] bg-white p-4 rounded-md">
      <div>{post.title}</div>
      <div>{post.body}</div>
      <div>
        <img className="" src={post.img} alt="" />
      </div>
    </div>
  );
};

export default Card;
