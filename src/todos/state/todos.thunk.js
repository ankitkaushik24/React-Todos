import { environment } from "../../environment.mjs";
import { loadError, loadInProgress, loadSuccessfull } from "./is-loading-slice";
import { create, remove, todosLoaded, update } from "./todo-slice";

const loading = (dispatch, loadFn) => {
  dispatch(loadInProgress());

  return loadFn()
    .then((result) => {
      dispatch(loadSuccessfull());
      return result;
    })
    .catch((e) => {
      dispatch(loadError());
    });
};

export const loadTodos = () => async (dispatch, _) => {
  loading(dispatch, () =>
    fetch(`${environment.baseUrl}/todos`)
      .then((res) => res.json())
      .then((body) => dispatch(todosLoaded(body)))
  );
};

export const postTodo = (description) => (dispatch, _) => {
  loading(dispatch, () =>
    fetch(`${environment.baseUrl}/todos`, {
      method: "POST",
      body: JSON.stringify({ description, completed: false }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((body) => dispatch(create(body)))
  );
};

export const putTodo = (todo) => (dispatch) => {
  loading(dispatch, () =>
    fetch(`${environment.baseUrl}/todos/${todo._id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((body) => dispatch(update(body)))
  );
};

export const deleteTodo = (todo) => (dispatch) => {
  loading(dispatch, () =>
    fetch(`${environment.baseUrl}/todos/${todo._id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => dispatch(remove(todo.description)))
  );
};
