import React from "react";
import userProfile from "../assets/userProfile.jpg";
import { Link } from "react-router-dom";

const User = () => {
  const someId = 78;
  return (
    <div className="flex gap-4 items-center border-[1px] border-gray-800 p-2 rounded-md">
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
        <p>10:20PM 20-12-2023</p>
      </div>
    </div>
  );
};

export default User;
