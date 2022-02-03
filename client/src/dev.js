import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./Components/App/App";
/*
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
*/

import "./main.scss";

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector(".root")
);

module.hot.accept();
