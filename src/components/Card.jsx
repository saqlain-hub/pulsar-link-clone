import React from "react";
import User from "../components/User";
import PostOptions from "./PostOptions";

const Card = ({ post }) => {
  return (
    <div className="p-2 rounded-md overflow-hidden">
      <div className="flex justify-between mb-4">
        <div className="w-[90%]">
          <User />
        </div>
        <div className="w-[10%]">
          <PostOptions />
        </div>
      </div>
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
