import { CREATE_TODO, REMOVE_TODO, UPDATE_TODO } from "./actions";

export const todosReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { description } = payload;
      return state.concat({ description, completed: false });
    }
    case REMOVE_TODO: {
      const { description } = payload;
      return state.filter((todo) => todo.description !== description);
    }
    case UPDATE_TODO: {
      return state.map((todo) => {
        if (todo.description === payload.description) {
          return payload;
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
