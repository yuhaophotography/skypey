import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import store from "./store";

import { App } from "./components";

const render = () => {
  console.log("%c store is 👉👉 %o", "background: purple", store.getState());
  ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render);
