import React from 'react'

function Normal({title , img , contnet,size}) {
  return (
    <div className="header-card">
      <div className="imgss">
        <img src={img} style={{width:size}} alt="" />
      </div>
      <h1>{title}</h1>
      <p>{contnet}</p>
    </div>
  );
}

export default Normal