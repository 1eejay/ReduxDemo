import React from "react";
import "./App.css";
import Board from "./components/Board/Board";
import store from "./store";

function App() {
  // const [squares, setSquare] = useState(new Array(9).fill(null));
  // const [stepCount, setStepCount] = useState(0);
  // const [history, SetHistory] = useState([]); // 历史

  // function getCurrentPlayer() {
  //   // 当前是哪种棋子
  //   stepCount % 2 === 0 ? "X" : "O";
  // }

  return (
    <div className="App">
      {/* <div className={"leftPanel"}>
        <Board />
      </div>
      <div className={"rightPanel"}>
        <PlayerInfo currentPlayer={getCurrentPlayer} />
        <History histroy={history} />
      </div> */}
      {console.log(store.getState())}
    </div>
  );
}

export default App;
