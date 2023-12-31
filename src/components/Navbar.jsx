import React from "react";
import logo from "/pulsar-link-logo.png";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginActions.logout());
  };
  const someId = 78;
  return (
    <nav className="flex items-center justify-between w-full h-full p-2 bg-yellow-400 rounded-b-md">
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
        <Link to={`/user/${someId}/profile`}>
          {/* <img src={user} alt="user icon" className="w-[30px]" /> */}
          <div className="text-2xl text-black">
            <CgProfile />
          </div>
        </Link>
        <Link to={`/user/${someId}/profile`}>Saqlain Javed</Link>
        <button className="" onClick={handleClick}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
