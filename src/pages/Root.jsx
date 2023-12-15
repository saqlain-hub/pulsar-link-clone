import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import UploadPost from "./UploadPost";

const Root = () => {
  return (
    <>
      <div className="w-full px-4 overflow-auto bg-gray-600 rounded-md">
        <Dashboard />
        <UploadPost />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
