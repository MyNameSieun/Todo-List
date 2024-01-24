import React, { useState } from "react";
import "./App.css";
import TodoItems from "components/TodoItems";
import TodoInput from "components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  const today = new Date();
  const currentDate = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="main-layout ">
      <div className="todo-layout">
        <div className="todo-top">
          <div className="todo-info">
            {" "}
            <div className="todo-title">Todo-list 📆</div>
            <div className="todo-date">{currentDate}</div>
          </div>

          <div className="todo-tasks">{todos.length} tasks</div>
          <TodoInput todos={todos} setTodos={setTodos} />
        </div>
      </div>
      {/*  todos, setTodos를 TodoItems.jsx에 props로 전달 */}
      <TodoItems todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
