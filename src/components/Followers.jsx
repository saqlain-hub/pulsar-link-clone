import React from "react";
import Follower from "../components/Follower";
import { followers } from "../data/followers";

const Followers = () => {
  return (
    <div className="mt-8">
      <h3>Who is following you</h3>
      <div>
        <Follower />
        {console.log(followers.name)}
      </div>
    </div>
  );
};

export default Followers;
