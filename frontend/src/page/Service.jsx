import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "../css/service.css";
import { serivce } from "../store/service.js";
import Normal from "../components/Normal.jsx";

function Service() {
  const ss = [
    " mumbai",
    "lucknow",
    "gorakhpur",
    "new delhi",
    "Banglor",
    "noida",
    "agra",
  ];
  let [datas, setdatas] = useState(0);
  const text = useRef(null);

  useEffect(() => {
    const d = setInterval(() => {
      if (datas === 6) {
        datas = 0;
      }
      text.current.innerText = `Service provided ${ss[datas]}`;
      datas++;
    }, 1000);

    return () => {
      clearInterval(d)
    }
  },[])
  
  return (
    <>
      <div className="servicegt">
        <h1 className="servvice-h1" ref={text}></h1>
        <section className="section normal-sec">
          {serivce.map((item, index) => (
            <Normal
              key={index}
              img={item.imgs}
              size={item.size}
              contnet={item.content}
              title={item.title}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default Service;
