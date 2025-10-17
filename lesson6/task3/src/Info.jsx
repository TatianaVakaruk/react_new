import React from 'react';

const Info = ({ text }) => {
  if (!text) {
    return null;
  }
  return <div className="info">{text}</div>;
};
export default Info;
