import React from "react";

// App.jsx로부터 props로 todos, setTodos 전달받음
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

  return (
    <div className="list-layout scrollBar">
      <span>
        {" "}
        {todos.map(function (item) {
          return (
            <div key={item.id} className="todo-item">
              <div
                className="todo-check-box"
                onClick={() => toggleIsDoneHandler(item.id)}
              >
                {item.isDone ? (
                  <div className="check-icon">
                    <span class="material-symbols-outlined">done</span>
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
