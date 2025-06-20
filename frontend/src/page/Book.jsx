import React, { useEffect, useState } from "react";
import Map from "../components/Map";

const Book = () => {
  const [datas, setdata] = useState([]);
  const Bus = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/car/bus", {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setdata(data.data);
      } else {
        console.log("fail", data);
      }
    } catch (err) {
      console.log("book error", err);
    }
  };
  useEffect(() => {
    Bus();
  },[])
  // console.log(datas);
  return (
    <div className="book">
      <Map card={datas}/>
    </div>
  )
};

export default Book;
