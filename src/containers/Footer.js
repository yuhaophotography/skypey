import React from "react";

import "./Footer.css";

import store from "../store";
import { setInputMessage } from "../redux/_actions";

const Footer = ({ activeUserId }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();

    store.dispatch(
      setInputMessage({
        userId: activeUserId,
        message: value
      })
    );

    setValue("");
  };

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className="footer" onSubmit={handleSubmit}>
      <input
        className="footer-input"
        onChange={handleInputChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default Footer;
