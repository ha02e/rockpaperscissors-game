import React from "react";

const Box = (props) => {
  console.log("props:", props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <div className="img-area">
        <img className="item-img" src={props.item && props.item.image} />
      </div>
      <h2>WIN!</h2>
    </div>
  );
};

export default Box;
