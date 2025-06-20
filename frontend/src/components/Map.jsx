import React from "react";
import Card from "./card";
import "../css/sales.css"

function Map({card}) {
  
  return (
    <div className="flex">
      {card?.map((item,index) => {
        return (
          <div key={index} className="flex-child">
          <Card
            key={index}
            imgs={item.img || item.imageUrl}
            content={item.content || item.description}
            title={item.title || item.name}
            price={item.title || item.price}
            />
            </div>
        );
      })}
    </div>
  );
}

export default Map;
