import React, { useState, useRef } from "react";
import imgIcon from "../assets/imageicon.png";
import userProfile from "../assets/userProfile.jpg";

const UploadPost = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="bg-white rounded-md p-2 flex gap-4">
      <div className="">
        <img
          className="rounded-full"
          src={userProfile}
          alt="user icon"
          width={50}
        />
      </div>
      <form className="bg-gray-400 p-2 w-full">
        <input type="text" className="" placeholder="caption" />
        <div className="">
          <img
            className="rounded-md cursor-pointer bg-red-200 p-2"
            src={imgIcon}
            alt="image icon"
            width={40}
            onClick={() => imageRef.current.click()}
          />
          <input
            className="hidden"
            type="file"
            ref={imageRef}
            onChange={onImageChange}
          />
        </div>
      </form>
      {image && <div>image selected</div>}
    </div>
  );
};

export default UploadPost;
