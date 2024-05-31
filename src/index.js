import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catReducer from "./store/redux/catState";
import  catSaga  from "./store/saga/catSaga";
const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {cat:catReducer},
  // middleware: [saga],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});
saga.run(catSaga)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
