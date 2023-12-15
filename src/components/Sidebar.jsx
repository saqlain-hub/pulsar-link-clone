import React from "react";
import userProfile from "../assets/userProfile.jpg";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`lg:block hidden relative open bg-gray-800 rounded-md origin-left duration-[2s] ${
        !open ? "w-20" : "w-60"
      } px-4 py-4`}
    >
      <div className="mb-8 origin-left duration-100 flex flex-col items-center ">
        <img
          onClick={() => setOpen(!open)}
          className="rounded-full border-2 cursor-pointer"
          src={userProfile}
          alt=""
        />
        <h3 className={`${!open && "hidden"}`}>Saqlain Javed</h3>
      </div>

      <div
        className={`flex ${
          !open && "justify-center"
        } items-center gap-2  pt-2 cursor-pointer`}
      >
        <AiFillMessage color="white" size="2.2rem" />
        <p className={`${!open && "hidden"}`}>Inbox</p>
      </div>
      <div
        className={`flex ${
          !open && "justify-center"
        } items-center gap-2  pt-2 cursor-pointer`}
      >
        <AiFillMessage color="white" size="2.2rem" />
        <p className={`${!open && "hidden"}`}>Profile</p>
      </div>
      <div
        className={`flex ${
          !open && "justify-center"
        } items-center gap-2  pt-2 cursor-pointer`}
      >
        <AiFillMessage color="white" size="2.2rem" />
        <p className={`${!open && "hidden"}`}>Interactions</p>
      </div>
      <div
        className={`flex ${
          !open && "justify-center"
        } items-center gap-2  pt-2 cursor-pointer`}
      >
        <AiFillMessage color="white" size="2.2rem" />
        <p className={`${!open && "hidden"}`}>Something longer</p>
      </div>
    </div>
  );
};

export default Sidebar;
