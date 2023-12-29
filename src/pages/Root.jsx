import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = ({ login, setLogin }) => {
  return (
    <div className="relative">
      <header className="sticky top-0 z-10 flex flex-col justify-center rounded-t-md">
        <Navbar setLogin={setLogin} login={login} />
      </header>
      <div className="">
        <Outlet /> {/** Layout */}
      </div>
    </div>
  );
};

export default Root;
