import React from "react";

const UploadPost = () => {
  return (
    <div className="m-4">
      <form className="hidden xsm:flex flex-wrap ">
        <input type="text" placeholder="caption" />
        <input type="file" />
      </form>
    </div>
  );
};

export default UploadPost;
