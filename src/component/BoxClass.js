import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
    this.resultMsg = "";
  }

  getResult = () => {
    if (this.props.title === "RESULT") {
      this.result = this.props.result;
      if (this.result === "win") {
        this.resultMsg = "WINNER!";
      } else if (this.result === "lose") {
        this.resultMsg = "LOSER!";
      } else if (this.result === "tie") {
        this.resultMsg = "TRY AGAIN!";
      }
    } else {
      if (
        this.props.title === "COMPUTER" &&
        this.props.result !== "tie" &&
        this.props.result !== ""
      ) {
        this.result = this.props.result === "win" ? "lose" : "win";
      } else {
        this.result = this.props.result;
      }

      if (this.result === "win") {
        this.resultMsg = "WIN!";
      } else if (this.result === "lose") {
        this.resultMsg = "LOSE..";
      } else if (this.result === "tie") {
        this.resultMsg = "TIE";
      }
    }
  };

  render() {
    this.getResult();
    return (
      <div
        className={`box ${
          this.props.title === "RESULT" ? this.props.resultArea : this.result
        } ${this.props.title === "RESULT" ? "result-area" : ""}`}
      >
        <h1>{this.props.title}</h1>
        <div className={`img-area ${this.props.resultArea}`}>
          <img
            className="item-img"
            src={this.props.item && this.props.item.image}
          />
        </div>
        <h2>{this.resultMsg}</h2>
      </div>
    );
  }
}
