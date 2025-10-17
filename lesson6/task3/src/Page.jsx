import React, { Component } from 'react';
import Message from './Message.jsx';

const info1 = 'Price is 500$. Available in 2 colors';
const info2 = 'Price is 650$. Not available';

class Page extends Component {
  state = {
    text: null,
  };
  setText = (text) => {
    this.setState({
      text: text,
    });
  };
  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(info1)}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.setText(info2)}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.setText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}
export default Page;
