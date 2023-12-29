import React from "react";
import userProfile from "../assets/userProfile.jpg";

const User = () => {
  return (
    <div className="flex gap-4 items-center border-[1px] border-gray-800 p-2 rounded-md">
      <img
        src={userProfile}
        alt="user profile image"
        className="w-[45px] rounded-full"
      />
      <div className="flex flex-col">
        <h3 className="font-bold">Saqlain Javed</h3>
        <p>10:20PM 20-12-2023</p>
      </div>
    </div>
  );
};

export default User;
