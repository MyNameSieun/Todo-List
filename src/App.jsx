import React, { useState } from "react";
import "./App.css";
import TodoItems from "components/TodoItems";

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
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const today = new Date();
  const currentDate = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <body>
      <div className="main-layout ">
        <div className="todo-layout">
          <div className="todo-top">
            <div className="todo-info">
              {" "}
              <div className="todo-title">Todo-list 📆</div>
              <div className="todo-date">{currentDate}</div>
            </div>

            <div className="todo-tasks">{todos.length} tasks</div>
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

        {/*  todos, setTodos를 TodoItems.jsx에 props로 전달 */}
        <TodoItems todos={todos} setTodos={setTodos} />
      </div>
    </body>
  );
}

export default App;
