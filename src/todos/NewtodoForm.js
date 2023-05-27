import React, { useState } from "react";
import "./NewTodoform.css";
import { useDispatch, useSelector } from "react-redux";
import { postTodo } from "./state/todos.thunk";
import { create } from "./state/todo-slice";

const NewTodoForm = () => {
  const todos = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();

  const [inputVal, setVal] = useState("");

  return (
    <div className="new-todo-form">
      <input
        data-cy="new-todo-input"
        className="new-todo-input"
        type="text"
        placeholder="Enter todo item"
        value={inputVal}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        data-cy="add-todo-button"
        className="new-todo-button"
        onClick={() => {
          const isDuplicate = todos.some(
            (todo) => todo.description === inputVal
          );
          if (!isDuplicate) {
            dispatch(postTodo(inputVal));
            setVal("");
          }
        }}
      >
        Add new Todo
      </button>
    </div>
  );
};

// const mapStateToProps = ({ todos }) => ({
//   todos,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addNewTodo: (description) => dispatch(createTodo(description)),
// });

export default NewTodoForm;

// export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
