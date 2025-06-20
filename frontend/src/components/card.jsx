import React from 'react'
import "../css/card.css"
function Card({title,imgs,content,price}) {
  return (
    <div className="card-main">
      <img className="card-img" src={imgs} alt="" />
      <h1 className="card-h1">{title}</h1>
      <p className="card-p">{content}</p>
      <div className="sst">
        <p className="card-p">price: {price} ₹</p>
        <button className='sst-btn'>Buy</button>
      </div>
    </div>
  );
}



export default Card 