import React from "react";

function TodoList({ handleToggleIsDone, handleDeleteBtnClick, todos }) {
  const sortedTodos = [...todos].sort((a, b) => a.isDone - b.isDone);

  return (
    <div className="list-layout scrollBar">
      <span>
        {" "}
        {sortedTodos.map(function (item) {
          return (
            <div key={item.id} className="todo-item">
              <div
                className="todo-check-box"
                onClick={() => handleToggleIsDone(item.id)}
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
              <button
                className="delete-box"
                onClick={() => handleDeleteBtnClick(item.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default TodoList;
