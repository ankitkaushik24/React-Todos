export const CREATE_TODO = "CREATE_TODO";

export const createTodo = (description) => ({
  type: CREATE_TODO,
  payload: { description },
});

export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = (description) => ({
  type: REMOVE_TODO,
  payload: { description },
});

export const UPDATE_TODO = "UPDATE_TODO";

export const updateTodo = (updatedTodo) => ({
  type: UPDATE_TODO,
  payload: updatedTodo,
});
