import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/register.css";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    username: "",
    emailId: "",
    password: "",
    mobile: "",
  });
  const toasterd = {
    position: "top-right",
    autoClose: 1000,
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
      const res = await fetch("http://localhost:8000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      const datas = await res.json();
      if (res.ok) {
        // console.log("resiter successfull", datas);
        toast.success(datas.message, toasterd);
        setdata({ username: "", emailId: "", password: "", mobile: "" });

        setTimeout(() => {
          navigate("/Login");
        }, 1200);
      } else {
        console.log("not register successful", datas);
        toast.error(datas.message, toasterd);
      }
    } catch (err) {
      console.log("register err", err);
    }
    console.log(data);
  };
  return (
    <div className="register-main">
      <form className="register-card">
        <h4 className="register-contents">Registration</h4>

        <div className="rg-innputs">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={data.username}
            name="username"
            autoComplete="off"
            onChange={changehandle}
          />
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
          />
          <input
            type="Number"
            placeholder="Enter Your Mobile No"
            value={data.mobile}
            name="mobile"
            onChange={changehandle}
          />
        </div>
        <div className="register-b">
          <NavLink className="rp" to="">
            forget password
          </NavLink>
          <button onClick={clickhandle} type="submit" className="login-btn">
            Signup
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
