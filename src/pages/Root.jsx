import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="relative">
      <header className="sticky top-0 z-10 flex flex-col justify-center rounded-t-md">
        <Navbar />
      </header>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
