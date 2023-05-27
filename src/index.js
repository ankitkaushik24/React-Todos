// import ReactDom from "react-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import { Provider } from "react-redux";
import { store, persistedStore } from "./Store-toolkit";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);
