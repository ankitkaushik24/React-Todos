import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    loaded: (_, { payload }) => payload,
    create: (state, { payload }) => {
      return state.concat(payload);
    },
    update: (state, { payload }) => {
      return state.map((todo) => {
        if (todo.description === payload.description) {
          return payload;
        }
        return todo;
      });
    },
    markAsComplete: (state, { payload }) => {
      return state.map((todo) => {
        if (todo.description === payload) {
          return { ...todo, completed: true };
        }
        return todo;
      });
    },
    remove: (state, { payload }) => {
      return state.filter((todo) => todo.description !== payload);
    },
  },
});

export const {
  create,
  update,
  markAsComplete,
  remove,
  loaded: todosLoaded,
} = todosSlice.actions;

export default todosSlice.reducer;
