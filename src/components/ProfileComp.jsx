import React from "react";
import userProfile from "../assets/userProfile.jpg";
import cover from "../assets/cover.jpg";
import { Link } from "react-router-dom";

const ProfileComp = ({ open, setOpen }) => {
  const someId = 78;
  return (
    <div className="flex flex-col bg-white p-2 rounded-md">
      <div className="relative w-full flex flex-col items-center justify-end">
        <div className="w-full h-[10rem] overflow-hidden flex items-center">
          <Link to={`/user/${someId}/profile`}>
            <img src={cover} alt="" className="cover-pic" />
          </Link>
        </div>
        <div className="absolute -bottom-10">
          <Link to={`/user/${someId}/profile`}>
            <img
              src={userProfile}
              alt=""
              className="shadow-md shadow-gray-400 border-2 border-white w-[6rem] rounded-full"
            />
          </Link>
        </div>
      </div>
      <div className="mt-14 text-center">
        <Link to={`/user/${someId}/profile`}>
          <p className="font-bold text-[1.3rem]">Saqlain Javed</p>
        </Link>
        <p>@saqlain78</p>
        <p className="text-[1.2rem]">Mern Stack Developer</p>
      </div>
      <div className="hr-line">
        <span className="line"></span>
      </div>
      <div></div>
    </div>
  );
};

export default ProfileComp;
