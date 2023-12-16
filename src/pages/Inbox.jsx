import React from "react";

const Inbox = () => {
  return (
    <div className="w-full">
      <h3>Chat System</h3>
      <div className="flex rounded-md bg-gray-400 mx-4 my-8 justify-between px-8 py-4 h-full">
        <section className="odd:bg-red-200 h-[100vh] w-[30%] mr-2">
          Online Users
        </section>
        <section className="even:bg-green-200 h-[100vh] w-[70%]">Chat</section>
      </div>
    </div>
  );
};

export default Inbox;
