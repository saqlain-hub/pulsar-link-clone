import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    axios
      .post("http://localhost:3001/auth/register", {
        firstName,
        lastName,
        occupation,
        picturePath: image,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setFirstName("");
    setLastName("");
    setOccupation("");
    setImage("");
    setEmail("");
    setPassword("");
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center bg-slate-800 h-screen">
      <form
        className=" w-[800px] bg-gray-500 rounded-md py-4 px-16"
        onSubmit={handleSubmit}
      >
        <h3 className="text-white text-2xl text-center mb-4 border-b-2 p-2 border-yellow-400">
          Register User
        </h3>
        <div className="flex flex-col items-center">
          <label htmlFor="firstName">First Name</label>
          <input
            className="py-1 px-2 rounded-md"
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="py-1 px-2 rounded-md"
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="occupation">Occupation</label>
          <input
            className="py-1 px-2 rounded-md"
            type="text"
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="image">Image Path</label>
          <input
            className="py-1 px-2 rounded-md"
            type="text"
            placeholder="imagePath"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="email">Email</label>
          <input
            className="py-1 px-2 rounded-md"
            type="email"
            placeholder="Something@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="password">Password</label>
          <input
            className="py-1 px-2 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center my-6">
          <button className="btn rounded-md hover:bg-yellow-400">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
