import React from "react";

import "./User.css";
import store from "../store";

import { setActiveUserId } from "../redux/_actions";

const User = ({ user }) => {
  const { userId, name, email, phone, avatorUrl } = user;

  const handleClick = () => {
    store.dispatch(setActiveUserId(userId));
  };

  return (
    <div className="user" onClick={handleClick}>
      <img src={avatorUrl} alt={name} className="user-avator" />

      <article className="user-detail">
        <p className="user-detail-name">{name}</p>
        {email}
        <br />
        {phone}
      </article>
    </div>
  );
};

export default User;
