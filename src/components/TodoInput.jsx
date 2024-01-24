import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoInput({ todos, setTodos }) {
  const [newTask, setNewTask] = useState("");
  const handlervalueChange = (event) => {
    setNewTask(event.target.value);
  };

  const handlerAddBtnClick = () => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        task: newTask,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add your task"
        value={newTask}
        onChange={handlervalueChange}
      ></input>
      <button className="add-box" onClick={handlerAddBtnClick}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
