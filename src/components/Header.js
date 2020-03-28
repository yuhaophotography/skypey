import React from "react";

import "./Header.css";

const Header = ({ user }) => {
  const { name, email } = user;

  return (
    <header className="header">
      <h2 className="header-name">{name}</h2>

      {email}
    </header>
  );
};

export default Header;
