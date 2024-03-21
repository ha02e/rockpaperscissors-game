import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    image: process.env.PUBLIC_URL + "images/rock.png",
  },
  scissors: {
    name: "Scissors",
    image: process.env.PUBLIC_URL + "images/scissors.png",
  },
  paper: {
    name: "Paper",
    image: process.env.PUBLIC_URL + "images/paper.png",
  },
};

export default class AppClass extends Component {
  //state
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      resultArea: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();

    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
      resultArea: this.judgement(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);

    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    return (
      <div className="game-board">
        <div className="main">
          <BoxClass
            title="ME"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="RESULT"
            resultArea={this.state.resultArea}
            result={this.state.result}
          />
          <BoxClass
            title="COMPUTER"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>
            <img src="images/scissors.png" />
          </button>
          <button onClick={() => this.play("rock")}>
            <img src="images/rock.png" />
          </button>
          <button onClick={() => this.play("paper")}>
            <img src="images/paper.png" />
          </button>
        </div>
      </div>
    );
  }
}
