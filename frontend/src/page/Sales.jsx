import React, { useEffect, useState } from "react";
import "../css/sales.css";
import { useAuth } from "../store/auth";
import Map from "../components/Map";

function Sales() {
  const [superBikes, setsuperBikes] = useState([]);
  const [superCarss, setsuperCarss] = useState([]);
  const [thors, setThors] = useState([]);
  const [loading, setloading] = useState(false);
  const { Tokne } = useAuth();

  const superBikess = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/car/superbike", {
        method: "GET",
        headers: {
          Authorization: Tokne,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setsuperBikes(data.bike);
        // console.log("success", data.bike);
        setloading(true);
      } else {
        console.log("err", data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const superCars = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/car/supercar", {
        method: "GET",
        headers: {
          Authorization: Tokne,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setsuperCarss(data.car);
        setloading(true);
      } else {
        console.log("err", data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const thor = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/car/thor", {
        method: "GET",
        headers: {
          Authorization: Tokne,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setThors(data.thor);
        // console.log("success", data);
        setloading(true);
      } else {
        console.log("err", data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    superBikess();
      superCars();
      thor();
  }, []);
  return (
    <div className="sales-main">
      <h1>World biggest car salling company</h1>

      {!loading ? (
        <h1>Loading ......</h1>
      ) : (
        <>
          <Map card={thors} />
          <Map card={superBikes} />
          <Map card={superCarss} />
        </>
      )}
    </div>
  );
}

export default Sales;
