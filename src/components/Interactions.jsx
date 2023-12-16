import React from "react";

const Interactions = ({ open, setOpen }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="p-2 text-center bg-gray-300 rounded-md">
        <p className={`${!open && "mx-auto"}`}>O</p>
        <p className={`${!open && "hidden"}`}>Inbox</p>
      </div>
      <div className="p-2 text-center bg-gray-300 rounded-md">
        <p className={`${!open && "mx-auto"}`}>O</p>
        <p className={`${!open && "hidden"}`}>Inbox</p>
      </div>
      <div className="p-2 text-center bg-gray-300 rounded-md">
        <p className={`${!open && "mx-auto"}`}>O</p>
        <p className={`${!open && "hidden"}`}>Inbox</p>
      </div>
    </div>
  );
};

export default Interactions;
