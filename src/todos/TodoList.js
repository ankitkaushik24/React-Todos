import React, { useEffect } from "react";
import NewTodoForm from "./NewtodoForm";
import { TodoListItem } from "./TodoListItem";
import { useSelector, useDispatch } from "react-redux";
import "./TodoList.css";

import {
  remove,
  markAsComplete as markAsCompleteAction,
} from "./state/todo-slice";
import { loadTodos, putTodo, deleteTodo } from "./state/todos.thunk";
import {
  getCompleteTodos,
  getIncompleteTodos,
  getTodos,
} from "./state/selectors";

const TodoList = () => {
  const incompleteTodos = useSelector(getIncompleteTodos);
  const completeTodos = useSelector(getCompleteTodos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const onRemovePressed = (todo) => dispatch(deleteTodo(todo));
  const markAsComplete = (todo) =>
    dispatch(putTodo({ ...todo, completed: true }));

  return (
    <div className="list-wrapper">
      <NewTodoForm />
      <div className="list-container" data-cy="todos-container">
        {incompleteTodos.length ? (
          <section className="incomplete-section" data-cy="incomplete-todos">
            <h3>Incomplete Todos: </h3>
            {incompleteTodos.map((todo) => (
              <TodoListItem
                key={todo._id}
                todo={todo}
                onRemovePressed={onRemovePressed}
                markAsComplete={markAsComplete}
              />
            ))}
          </section>
        ) : null}

        {completeTodos.length ? (
          <section className="complete-section" data-cy="completed-todos">
            <h3>Completed Todos: </h3>
            {completeTodos.map((todo) => (
              <TodoListItem
                key={todo._id}
                todo={todo}
                onRemovePressed={onRemovePressed}
                markAsComplete={markAsComplete}
              />
            ))}
          </section>
        ) : null}
      </div>
    </div>
  );
};

// const mapStateToProps = ({ todos }) => ({ todos });
// const mapDispatchToProps = (dispatch) => ({
//   onRemovePressed: (description) => dispatch(removeTodo(description)),
//   markAsComplete: (todo) =>
//     dispatch(updateTodo({ ...todo, completed: true })),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;
