import React from "react";
import { TbDotsVertical } from "react-icons/tb";

const PostOptions = () => {
  return (
    <div className="flex gap-1 flex-col items-center">
      <p className="cursor-pointer text-2xl">
        <TbDotsVertical />
      </p>
    </div>
  );
};

export default PostOptions;
