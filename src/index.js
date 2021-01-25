import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.scss";
import { Provider } from "react-redux";
import {store} from "./store";
require("file-loader?name=[name].[ext]!../index.html");

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
