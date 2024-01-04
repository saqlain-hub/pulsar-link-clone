import React from "react";
import userProfile from "../assets/userProfile.jpg";
import cover from "../assets/cover.jpg";
import { Link } from "react-router-dom";

const ProfileComp = ({ open, setOpen }) => {
  const someId = 78;
  return (
    <div className="flex flex-col bg-white p-2 rounded-md">
      <div className="relative flex flex-col items-center justify-end">
        <div className="w-full h-[8rem] overflow-hidden flex items-center">
          <Link to={`/user/${someId}/profile`}>
            <img src={cover} alt="" className="cover-pic" />
          </Link>
        </div>
        <div className="absolute -bottom-10">
          <Link to={`/user/${someId}/profile`}>
            <img
              src={userProfile}
              alt=""
              className="shadow-md shadow-gray-400 border-2 border-white w-[5rem] rounded-full"
            />
          </Link>
        </div>
      </div>
      <div className="mt-14 ">
        <Link to={`/user/${someId}/profile`}>
          <p className="font-bold text-[1.2rem] text-center">Saqlain Javed</p>
        </Link>
        <p>@saqlain78</p>
        <p className="text-[1rem] bg-gray-300 mt-2 h-20">
          Mern Stack Developer
        </p>
      </div>
      {/* <div className="hr-line">
        <span className="line"></span>
      </div> */}
      <div></div>
    </div>
  );
};

export default ProfileComp;
