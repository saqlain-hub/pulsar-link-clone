import React from "react";
import Follower from "../components/Follower";
import { followers } from "../data/followers";

const Followers = () => {
  return (
    <div className="mt-8 bg-white rounded-md px-2 py-4">
      <h3 className="text-xl mb-6 ml-4">Who is following you</h3>
      <div>
        {followers.map((follower) => {
          return (
            <div
              className="flex items-center justify-between mt-4 px-2"
              key={follower.id}
            >
              <div className="flex gap-2">
                <img
                  className="w-[50px] rounded-full"
                  src={follower.profilePic}
                  alt={`${follower.name}'s profile pic`}
                />
                <div>
                  <h1 className="font-bold">{follower.name}</h1>
                  <p>{follower.username}</p>
                </div>
              </div>
              <button>Follow</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Followers;
