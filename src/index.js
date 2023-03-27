import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

// Global Store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
