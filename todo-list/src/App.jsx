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
  const [todos, setTodos] = useState([]);

  const [newTask, setNewTask] = useState("");

  const valueChangeHandler = (event) => {
    setNewTask(event.target.value);
  };

  const addClickBtnHandler = () => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        task: newTask,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const clickRemoveBtnHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
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
                placeholder="Add your task"
                value={newTask}
                onChange={valueChangeHandler}
              ></input>
              <div className="add-box" onClick={addClickBtnHandler}>
                Add
              </div>
            </div>
          </div>
        </div>

        <div className="list-layout">
          <span>
            {" "}
            {todos.map(function (item) {
              return (
                <div key={item.id} className="todo-item">
                  <div className="todo-check-box">
                    <div className="check-icon">✔️</div>
                    <span>{item.task}</span>
                  </div>
                  <div
                    className="delate-box"
                    onClick={() => clickRemoveBtnHandler(item.id)}
                  >
                    x
                  </div>
                </div>
              );
            })}
          </span>
        </div>
      </div>
    </body>
  );
}

export default App;
