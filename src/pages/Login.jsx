import React from "react";
import logo from "../assets/logo.png";
import socialConn from "../assets/login/social-connection.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginActions.login());
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex items-center lg:justify-between justify-center w-full">
        <div className="w-[35%] ml-24 bg-slate-900 shadow-sm shadow-white rounded-md py-8">
          <p className="text-white text-2xl text-center mb-8">Login</p>
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 flex-col items-center justify-center "
          >
            <input
              className="w-[70%] p-2 rounded-md outline-none"
              type="text"
              placeholder="username"
            />
            <input
              className="w-[70%] p-2 rounded-md outline-none"
              type="text"
              placeholder="password"
            />

            <button className="login-btn btn w-[40%] p-2 my-3 rounded-[25px] outline-none">
              Login
            </button>
            <div className="text-center">
              <Link>
                <p>Forgot Password?</p>
              </Link>
              <Link>
                <p>Create an account?</p>
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden lg:block relative bg-[#0D1032] w-[45%] pl-16 pr-4 py-16 rounded-l-[50px]">
          <img src={socialConn} alt="" className="pt-12" />

          <div className="flex items-center gap-4 absolute top-6 left-6">
            <img src={logo} alt="website logo" className="w-14 rounded-full" />
            <div className="text-white">
              <h2>Pulsar Link</h2>
              <p>A platform that connects everyone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
