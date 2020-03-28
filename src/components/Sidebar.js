import React from "react";

import "./Sidebar.css";

import User from "../containers/User";

const Sidebar = ({ contacts }) => {
  const renderContacts = () =>
    contacts.map(contact => <User key={contact.userId} user={contact} />);

  return <aside className="sidebar">{renderContacts()}</aside>;
};

export default Sidebar;
