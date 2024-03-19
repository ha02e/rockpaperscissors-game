import React from "react";

const Box = (props) => {
  //   console.log("props:", props);
  let result;
  let resultMsg;
  //title이 COMPUTER, 비긴 경우가 아님, result 값이 있을 경우
  if (
    props.title == "COMPUTER" &&
    props.result != "tie" &&
    props.result != ""
  ) {
    result = props.result == "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  if (result == "win") {
    resultMsg = "WIN!";
  } else if (result == "lose") {
    resultMsg = "LOSE..";
  } else if (result == "tie") {
    resultMsg = "TIE";
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <div className="img-area">
        <img className="item-img" src={props.item && props.item.image} />
      </div>
      <h2>{resultMsg}</h2>
    </div>
  );
};

export default Box;
