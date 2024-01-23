import React from "react";

function TodoInput({ todos, setTodos, newTask, setNewTask }) {
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

  return (
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
  );
}

export default TodoInput;