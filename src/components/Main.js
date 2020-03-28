import React from "react";

import "./Main.css";

import Empty from "./Empty";
import Chats from "./Chats";

const Main = ({ user, activeUserId }) => {
  const renderMain = () => {
    if (!activeUserId) {
      return <Empty user={user} />;
    }

    return <Chats activeUserId={activeUserId} />;
  };

  return <main className="main">{renderMain()}</main>;
};

export default Main;
