import React from "react";
import Card from "../components/Card";
import img1 from "../assets/userProfile.jpg";

const Post = () => {
  const posts = [
    { id: 1, title: "Post One", body: "This is post one", img: img1 },
    { id: 2, title: "Post One", body: "This is post one", img: img1 },
    { id: 3, title: "Post One", body: "This is post one", img: img1 },
  ];

  return (
    <div className="flex mt-4 flex-col items-center gap-4">
      {posts.map((post) => {
        return <Card key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Post;
