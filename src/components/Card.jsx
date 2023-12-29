import React from "react";
import User from "../components/User";
import { MdOutlineAddReaction } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
const Card = ({ post }) => {
  return (
    <div className="p-4 bg-white rounded-md overflow-hidden">
      <div className="flex justify-between mb-4">
        <div className="w-full">
          <User />
        </div>
      </div>
      <div>{post.body}</div>
      <div>
        <img className="" src={post.img} alt="" />
      </div>
      <div className="flex items-center justify-between px-2 mt-2">
        <div className="rounded-md h-10 flex items-center gap-2 hover:bg-red-500 cursor-pointer">
          <p className="text-2xl">
            <MdOutlineAddReaction />
          </p>
          <p className="text-[1.1rem]">Reaction</p>
        </div>
        <div className="rounded-md h-10 flex items-center gap-2 hover:bg-red-500 cursor-pointer">
          <p className="text-2xl">
            <AiOutlineComment />
          </p>
          <p className="text-[1.1rem]">Comments</p>
        </div>
        <div className="rounded-md h-10 flex items-center gap-2 hover:bg-red-500 cursor-pointer">
          <p className="text-2xl">
            <RiShareForwardLine />
          </p>
          <p className="text-[1.1rem]">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
