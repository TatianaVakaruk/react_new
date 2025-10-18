import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogin: true,
      spinner: false,
    };
  }
  isLogout = () => {
    this.setState({
      onLogin: false,
      spinner: true,
    });

    setTimeout(
      () =>
        this.setState({
          onLogin: false,
          spinner: false,
        }),
      2000
    );
  };
  isLogin = () => {
    this.setState({
      onLogin: true,
      spinner: false,
    });
  };
  render() {
    return (
      <>
        {this.state.onLogin ? (
          <Login onLogin={() => this.isLogout()} />
        ) : this.state.spinner ? (
          <Spinner size={20} />
        ) : (
          <Logout onLogout={() => this.isLogin()} />
        )}
      </>
    );
  }
}
export default Auth;
