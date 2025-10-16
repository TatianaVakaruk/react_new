import React from 'react';

const Login = (props) => {
  return (
    <button onClick={props.onLogin} className="btn login">
      Login
    </button>
  );
};
export default Login;
