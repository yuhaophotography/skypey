import React from "react";

import "./Chats.css";

import store from "../store";
import Header from "./Header";
import Chat from "./Chat";
import Footer from "../containers/Footer";

const Chats = ({ activeUserId }) => {
  const state = store.getState();
  const user = state.contacts.listById[activeUserId];
  const messages = state.messages[activeUserId];

  return (
    <div className="chats">
      <Header user={user} />
      <Chat messages={messages} />
      <Footer activeUserId={activeUserId} />
    </div>
  );
};

export default Chats;
