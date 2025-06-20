import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/login.css";
import { useAuth } from "../store/auth";
import { toast, ToastContainer } from "react-toastify";
function login() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    emailId: "",
    password: "",
    mobile: "",
  });
  const { setToken } = useAuth();
  const toasterd = {
    position: "top-right",
    autoClose: 2000,
    theme: "colored",
  };
  const changehandle = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const clickhandle = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/user/loginss", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      const datas = await res.json();
      if (res.ok) {
        console.log("login successfull", datas);
        toast.success(datas.message, toasterd);
        setToken(datas.token);

        setdata({ emailId: "", password: "", mobile: "" });
        
        setTimeout(() => {
          navigate("/")
        }, 1000);
      } else {
        toast.error(datas.message, toasterd);
      }
    } catch (err) {
      console.error("login error", err);
    }
  };
  return (
    <form className="login-main">
      <div className="login-card">
        <h4 className="login-contents">Login</h4>

        <div className="innputs">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={data.emailId}
            name="emailId"
            onChange={changehandle}
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={data.password}
            name="password"
            onChange={changehandle}
            autoComplete="off"
          />
          <input
            type="number"
            placeholder="Enter Your Mobile No"
            value={data.mobile}
            name="mobile"
            onChange={changehandle}
            autoComplete="off"
          />
        </div>
        <div className="login-b">
          <NavLink className="p" to="/Register">
            <button className="login-btn">
              Registration
            </button>
          </NavLink>
          <button onClick={clickhandle} type="submit" className="login-btn">
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
}

export default login;
