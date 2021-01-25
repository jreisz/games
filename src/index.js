import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.scss";
import { Provider } from "react-redux";
import {store,persistor} from "./store";
import { PersistGate } from "redux-persist/integration/react";
require("file-loader?name=[name].[ext]!../index.html");

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
