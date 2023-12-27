import React from "react";
import Post from "./Post";
import UploadPost from "./UploadPost";
const Homepage = () => {
  return (
    <main className="relative flex flex-col items-center min-h-screen">
      <UploadPost />
      <Post />
    </main>
  );
};

export default Homepage;
