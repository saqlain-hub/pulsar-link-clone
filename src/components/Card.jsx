import React from "react";

const Card = ({ post }) => {
  return (
    <div className="md:w-[480px] bg-white p-4 rounded-md">
      <div>{post.title}</div>
      <div>{post.body}</div>
      <div>
        <img className="" src={post.img} alt="" />
      </div>
      <div className="flex items-center gap-1 bg-red-300 mt-2">
        <div className="rounded-md bg-blue-300 h-10 w-10 flex items-center justify-center hover:bg-red-500 cursor-pointer">
          o
        </div>
        <div className="rounded-md bg-blue-300 h-10 w-10 flex items-center justify-center hover:bg-red-500 cursor-pointer">
          o
        </div>
        <div className="rounded-md bg-blue-300 h-10 w-10 flex items-center justify-center hover:bg-red-500 cursor-pointer">
          o
        </div>
      </div>
    </div>
  );
};

export default Card;
