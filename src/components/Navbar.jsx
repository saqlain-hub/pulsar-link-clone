import React from "react";
import logo from "/pulsar-link-logo.png";
import user from "../assets/user.png";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-full p-2 bg-yellow-400 rounded-md">
      <Link to="/">
        <div className="flex items-center gap-2 ">
          <img src={logo} alt="" className="w-[40px] rounded-md" />
          <p className="font-bold text-lg">Pulsar Link</p>
        </div>
      </Link>
      <div className="">
        <form className="md:block hidden">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-2 outline-none rounded-md w-[350px]"
          />
        </form>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={user} alt="user icon" className="w-[30px]" />
        </Link>
        <Link to="/">Saqlain Javed</Link>
      </div>
    </nav>
  );
};

export default Navbar;
