import React from 'react';
import ReactDOM from 'react-dom';
const UserAvatar = (props) => {
  return <img className="avatar" src={props.avatarUrl} alt={props.name} />;
};
export default UserAvatar;
