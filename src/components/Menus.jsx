import React from "react";
import { Link } from "react-router-dom";

const Menus = ({ open, setOpen }) => {
  const someId = 78;
  return (
    <div className="">
      <ul className="">
        <li>
          <Link to={`/user/${someId}/inbox`}>
            <div className="flex rounded-md justify-between mt-1 bg-gray-300 p-2">
              <p className={`${!open && "hidden"}`}>Inbox</p>
              <p className={`${!open && "mx-auto"}`}>O</p>
            </div>
          </Link>
          <Link to={`/user/${someId}/inbox`}>
            <div className="flex rounded-md justify-between mt-1 bg-gray-300 p-2">
              <p className={`${!open && "hidden"}`}>Inbox</p>
              <p className={`${!open && "mx-auto"}`}>O</p>
            </div>
          </Link>
          <Link to={`/user/${someId}/inbox`}>
            <div className="flex rounded-md justify-between mt-1 bg-gray-300 p-2">
              <p className={`${!open && "hidden"}`}>Inbox</p>
              <p className={`${!open && "mx-auto"}`}>O</p>
            </div>
          </Link>
          <Link to={`/user/${someId}/inbox`}>
            <div className="flex rounded-md justify-between mt-1 bg-gray-300 p-2">
              <p className={`${!open && "hidden"}`}>Inbox</p>
              <p className={`${!open && "mx-auto"}`}>O</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
