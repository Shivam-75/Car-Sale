import React, { useEffect } from "react";
import "../css/error.css";
import {NavLink} from "react-router-dom"
import { FaUserNurse } from "react-icons/fa";
const Error = () => {
    const bus = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/car/bus", {
                method: "GET",
                headers: {
                    "Content-Type":"Application/json"
                }
            })

            const data = await res.json();
            if (res.ok) {
                console.log("successfull", data);
            }
            else {
                console.log("failed",data)
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        bus();
    },[])
  return (
    <div className="error">
      <div className="error-box">
        <img src="./public/showroom/image copy 9.png" alt="" />
        <div className="btnn">
          <NavLink className="error-btn" to="/">Home</NavLink>
          <NavLink className="error-btn" to="/Service">Service</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
