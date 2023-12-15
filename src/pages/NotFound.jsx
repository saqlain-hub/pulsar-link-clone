import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Oops...
      <p>
        No page found go back to <Link to="/">homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
