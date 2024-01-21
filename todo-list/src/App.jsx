import React, { useState } from "react";
// import Lottie from "lottie-react";
// import { lottie } from "assets";
import "./App.css";

// function Home() {
//   return (
//     <div>
//       <Lottie animationData={lottie} />
//     </div>
//   );
// }

function App() {
  const [todos, setTodos] = useState([""]);

  const valueChangeHandler = (event) => {
    setTodos(event.target.value);
  };

  return (
    <body>
      <div className="main-layout">
        <div className="todo-layout">
          <div className="todo-top">
            <div className="todo-info">
              {" "}
              <div className="todo-title">Todo-list</div>
              <div className="todo-date">2024-01-19</div>
            </div>

            <div className="todo-tasks">5 tasks</div>
            <div className="todo-input">
              <input
                type="text"
                placeholder="할 일을 입력하세요."
                value={todos}
                onChange={valueChangeHandler}
              ></input>
              <div className="add-box">Add</div>
            </div>
          </div>
        </div>
        <div className="list-layout">
          <div className="todo-item">
            <div className="todo-check-box">
              <div className="check-icon">✔️</div>
              <span>내용 </span>
            </div>
            <div className="delate-box">x</div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
