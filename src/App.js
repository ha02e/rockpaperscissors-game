import "./App.css";
import Box from "./component/Box";

//1. 박스 3개 나/결과/pc (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. pc는 랜덤하게 값을 선택한다
//5. 3번 4번 결과를 가지고 승패를 따진다
//6. 승패 결과에 따라 테두리 색이 바뀐다.

function App() {
  return (
    <div>
      <div className="main">
        <Box title="ME" />
        <Box title="RESULT" />
        <Box title="COMPUTER" />
      </div>
      <div className="main">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
