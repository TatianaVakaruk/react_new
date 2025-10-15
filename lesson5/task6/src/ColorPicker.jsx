import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }
  onCoral() {
    this.setState({
      color: 'Coral',
    });
  }
  onAqua() {
    this.setState({
      color: 'Aqua',
    });
  }
  onBisque() {
    this.setState({
      color: 'Bisque',
    });
  }
  onClear() {
    this.setState({
      color: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.onCoral()}
            onMouseLeave={() => this.onClear()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.onAqua()}
            onMouseLeave={() => this.onClear()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.onBisque()}
            onMouseLeave={() => this.onClear()}
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
