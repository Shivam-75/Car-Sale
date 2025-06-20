import React, { useRef, useState } from "react";
import HomeCp from "../components/homecp.jsx";
import Map from "../components/Map.jsx";
import { cars } from "../store/cars.js";
import { bikes } from "../store/bikes.js";
import { dd2 } from "../store/dt2.js";
import "../css/normal.css";
import Normal from "../components/Normal.jsx";

function Home() {
  return (
    <>
      <h1 className="home-car-back">Our Brand Unbeatable</h1>
      <HomeCp title={dd2.title} imgs={dd2.imgs} content={dd2.content} />
      <h1 className="h1">Top Model Super cars</h1>
      <section className="section normal-sec">
        {cars.map((item, index) => (
          <Normal
            key={index}
            img={item.img}
            contnet={item.content}
            title={item.title}
          />
        ))}
      </section>

      <HomeCp
        imgs={dd2.imgs1}
        size={dd2.size2}
        title={dd2.title1}
        content={dd2.content1}
      />
      <h1 className="h1">Top model super Bikes</h1>

      <section className="section normal-sec">
        {bikes.map((item, index) => (
          <Normal
            key={index}
            img={item.img}
            contnet={item.content}
            title={item.title}
          />
        ))}
      </section>

      <HomeCp
        imgs={dd2.imgs2}
        size={dd2.size2}
        title={dd2.title2}
        content={dd2.content2}
      />
      <h1 className="h1">Top model super Thor</h1>
      <section className="section normal-sec">
        {cars.map((item, index) => (
          <Normal
            key={index}
            img={item.img}
            contnet={item.content}
            title={item.title}
          />
        ))}
      </section>
      <HomeCp
        imgs={dd2.imgs3}
        // size={data.size}
        title={dd2.title3}
        content={dd2.content3}
      />
    </>
  );
}

export default Home;
