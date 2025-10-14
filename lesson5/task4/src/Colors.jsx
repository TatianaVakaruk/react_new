import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyGolor = (color) => {
    document.body.style.backgroundColor = color;
  };
  render() {
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: RED }}
          className="colors__button"
          onClick={() => this.setBodyGolor(RED)}
        ></button>
        <button
          style={{ backgroundColor: GREEN }}
          className="colors__button"
          onClick={() => this.setBodyGolor(GREEN)}
        ></button>
        <button
          style={{ backgroundColor: BLUE }}
          className="colors__button"
          onClick={() => this.setBodyGolor(BLUE)}
        ></button>
      </div>
    );
  }
}
export default Colors;
