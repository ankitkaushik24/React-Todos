import React from "react";
import "./TodoListItem.css";

export const TodoListItem = ({ todo, onRemovePressed, markAsComplete }) => (
  <div
    data-cy="todo-item-container"
    className={
      "todo-item-container " + (todo.completed ? "completed" : "pending")
    }
  >
    <h4 data-cy="todo-item-text">{todo.description}</h4>
    <div className="buttons-container">
      {todo.completed ? null : (
        <button
          data-cy="todo-complete-btn"
          className="completed-button"
          onClick={() => {
            markAsComplete(todo);
          }}
        >
          Mark as completed
        </button>
      )}
      <button
        data-cy="todo-remove-btn"
        className="remove-button"
        onClick={() => {
          onRemovePressed(todo);
        }}
      >
        Remove
      </button>
    </div>
  </div>
);
