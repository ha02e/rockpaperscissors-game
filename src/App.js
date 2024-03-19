import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

//1. 박스 3개 나/결과/pc (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임 - state
//4. pc는 랜덤하게 값을 선택한다
//5. 3번 4번 결과를 가지고 승패를 따진다
//6. 승패 결과에 따라 테두리 색이 바뀐다.

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

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    // console.log(userChoice);
    setUserSelect(choice[userChoice]);
  };

  return (
    <div className="game-board">
      <div className="main">
        <Box title="ME" item={userSelect} />
        <Box title="RESULT" />
        {/*<Box title="COMPUTER" item={userSelect} /> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>
          <img src="images/scissors.png" />
        </button>
        <button onClick={() => play("rock")}>
          <img src="images/rock.png" />
        </button>
        <button onClick={() => play("paper")}>
          <img src="images/paper.png" />
        </button>
      </div>
    </div>
  );
}

export default App;
