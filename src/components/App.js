import React from "react";

import "./App.css";

import store from "../store";

import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  const { ids, listById } = contacts;
  const lists = ids.map(id => listById[id]);

  return (
    <article className="app">
      <Sidebar contacts={lists} />
      <Main user={user} activeUserId={activeUserId} />
    </article>
  );
};

export default App;
