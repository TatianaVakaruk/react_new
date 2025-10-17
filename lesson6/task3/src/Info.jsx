import React from 'react';

const Message = ({ text }) => {
  if (!text) {
    return null;
  }
  return <div className="info">{text}</div>;
};
export default Message;
