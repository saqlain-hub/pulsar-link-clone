import React from "react";

const UploadPost = () => {
  return (
    <div className="my-4">
      <form>
        <input type="text" placeholder="caption" />
        <input type="file" />
      </form>
    </div>
  );
};

export default UploadPost;
