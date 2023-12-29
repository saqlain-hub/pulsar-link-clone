import React from "react";
import userProfile from "../assets/userProfile.jpg";
import { Link } from "react-router-dom";
import { TbDotsVertical } from "react-icons/tb";

const User = () => {
  const someId = 78;
  return (
    <div className="flex justify-between border-[1px] border-gray-800 p-2 rounded-md">
      <div className="flex gap-4 items-center">
        <Link to={`/user/${someId}/profile`}>
          <img
            src={userProfile}
            alt="user profile image"
            className="w-[45px] rounded-full"
          />
        </Link>
        <div className="flex flex-col">
          <Link to={`/user/${someId}/profile`}>
            <h3 className="font-bold">Saqlain Javed</h3>
          </Link>
          <p>10:20PM - 20 Dec 2023</p>
        </div>
      </div>
      <div className="text-2xl">
        <TbDotsVertical />
      </div>
    </div>
  );
};

export default User;
