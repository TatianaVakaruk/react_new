import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  state = {
    visible: true,
  };
  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        <span>
          {this.state.visible && <Clock location="NEW YORK" offset={-5} />}
        </span>
        <span>
          {this.state.visible && <Clock location="KYIV" offset={2} />}
        </span>
        <span>
          {this.state.visible && <Clock location="LONDON" offset={0} />}
        </span>
      </>
    );
  }
}
export default App;
