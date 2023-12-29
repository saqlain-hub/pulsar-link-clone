import React from "react";
import Posts from "./Posts";
import UploadPost from "./UploadPost";
const Homepage = () => {
  return (
    <main className="relative flex flex-col items-center min-h-screen">
      <UploadPost />
      <Posts />
    </main>
  );
};

export default Homepage;
