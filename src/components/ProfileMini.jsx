import React from "react";
import userProfile from "../assets/userProfile.jpg";
import { useState } from "react";

const ProfileMini = () => {
  const [showProfile, setShowProfile] = useState(false);
  const displayProfile = function () {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <div className="transition ease-in duration-500 relative w-[300px] flex bg-gray-800 flex-col items-center rounded-md">
        <div className="px-2 py-6 overflow-hidden">
          <a href={userProfile}>
            <img
              src={userProfile}
              alt=""
              className="border-2 border-white rounded-full w-[200px]"
            />
          </a>
        </div>
        <div className="text-center px-4 text-white">
          <h3 className="font-bold text-2xl mb-4">Saqlain Javed</h3>
          <p className="px-4">
            MERN Stack Developer, full stack web developer at fiverr
          </p>
        </div>
        {/* <div className="w-full px-4 mt-4">
            <hr />
            <h3 className="pt-2 font-bold text-white text-lg mb-2">
              Interests
            </h3>
            <div className="flex gap-2 pb-4 text-white flex-wrap">
              <p className="border-[1px] rounded-md border-white p-2">
                Video Games
              </p>
              <p className="border-[1px] rounded-md border-white p-2">
                Chessing
              </p>
              <p className="border-[1px] rounded-md border-white p-2">
                Swimming
              </p>
              <p className="border-[1px] rounded-md border-white p-2">Coding</p>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default ProfileMini;
