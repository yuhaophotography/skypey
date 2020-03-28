import React from "react";

import "./Empty.css";

const Empty = ({ user }) => {
  const { name, email, avatorUrl } = user;
  const shortname = name.split(" ")[0];

  return (
    <div className="empty">
      <h1 className="empty-shortname">Welcome, {shortname} </h1>

      <img src={avatorUrl} alt={name} className="empty-avator" />

      <p className="empty-email">
        <b>Email:</b> {email}
      </p>

      <button className="empty-button">Start a conversation</button>

      <p className="empty-info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  );
};

export default Empty;
