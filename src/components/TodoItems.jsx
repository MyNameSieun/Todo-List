// App.jsx로부터 props로 todos, setTodos

import React from "react";
import TodoList from "./TodoList";

function TodoItems({ todos, setTodos }) {
  const handlerToggleIsDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };
  const handleDeleteBtnClick = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <TodoList
      handlerToggleIsDone={handlerToggleIsDone}
      handleDeleteButtonClick={handleDeleteBtnClick}
      todos={todos}
    />
  );
}

export default TodoItems;
