import React from "react";
import userProfile from "../assets/userProfile.jpg";
import { Link } from "react-router-dom";

const ProfileComp = ({ open, setOpen }) => {
  const someId = 78;
  return (
    <Link to={`/user/${someId}/profile`}>
      <div className={`flex gap-2 p-1 items-center bg-gray-300 rounded-md mx`}>
        <img
          className="w-[50px] rounded-full border-2 border-white"
          src={userProfile}
          alt=""
        />
        <h3 className={`${!open && "scale-0"} duration-300 origin-left`}>
          Saqlain Javed
        </h3>
      </div>
    </Link>
  );
};

export default ProfileComp;
