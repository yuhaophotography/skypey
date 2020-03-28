import React from "react";

import "./Chat.css";

const Chat = ({ messages }) => {
  const ref = React.useRef(null);

  const renderClass = isUser => `text ${isUser ? "is-user" : ""}`;

  const renderMessages = () =>
    messages.map(message => (
      <span key={message.index} className={renderClass(message.isUser)}>
        {message.text}
      </span>
    ));

  React.useLayoutEffect(() => {
    ref.current.scrollBy(0, ref.current.scrollHeight);
  }, [messages]);

  return (
    <p className="chat" ref={ref}>
      {renderMessages()}
    </p>
  );
};

export default Chat;
