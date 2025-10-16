import React from 'react';

const Logout = (props) => {
  return (
    <button onClick={props.onLogout} className="btn logout">
      Logout
    </button>
  );
};
export default Logout;
