import React from "react";

const Box = (props) => {
  //   console.log("props:", props);
  let result;
  //title이 COMPUTER, 비긴 경우가 아님, result 값이 있을 경우
  if (
    props.title == "COMPUTER" &&
    props.result != "TIE" &&
    props.result != ""
  ) {
    result = props.result == "WIN!" ? "LOSE.." : "WIN!";
  } else {
    result = props.result;
  }

  return (
    <div className="box">
      <h1>{props.title}</h1>
      <div className="img-area">
        <img className="item-img" src={props.item && props.item.image} />
      </div>
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
