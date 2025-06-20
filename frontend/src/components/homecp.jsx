import React, { useEffect, useRef } from "react";
function HomeCp({ title, imgs, content, size }) {
  return (
    <>
      <header className="Home-main">
        <div  className="home1">
          <h1>{title}</h1>
          <p>{content}</p>
          <button>Click</button>
        </div>
        <div className="home2">
          <img
            className="home-main-img "
            style={{ width: size }}
            src={imgs}
            alt=""
          />
        </div>
      </header>
    </>
  );
}

export default HomeCp;
