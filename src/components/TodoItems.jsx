// App.jsx로부터 props로 todos, setTodos

import React from "react";

function TodoItems({ todos, setTodos }) {
  const toggleIsDoneHandler = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };
  const clickRemoveBtnHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.isDone === b.isDone) {
      return 0;
    } else {
      return a.isDone ? 1 : -1;
    }
  });

  return (
    <div className="list-layout scrollBar">
      <span>
        {" "}
        {sortedTodos.map(function (item) {
          return (
            <div key={item.id} className="todo-item">
              <div
                className="todo-check-box"
                onClick={() => toggleIsDoneHandler(item.id)}
              >
                {item.isDone ? (
                  <div className="check-icon">
                    <span className="material-symbols-outlined">done</span>
                  </div>
                ) : (
                  <div className="is-done-box"></div>
                )}

                <span>{item.task}</span>
              </div>
              <div
                className="delete-box"
                onClick={() => clickRemoveBtnHandler(item.id)}
              >
                x
              </div>
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default TodoItems;
