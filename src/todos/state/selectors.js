import { createSelector } from "reselect";

export const getTodos = (state) => state.todos;

export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.completed)
);
export const getCompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.completed)
);
