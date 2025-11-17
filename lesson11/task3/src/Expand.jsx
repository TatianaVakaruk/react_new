import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  openContent = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={this.openContent} className="expand__toggle-btn">
            {isOpen ? (
              <i className="fas fa-chevron-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </button>
        </div>
        {isOpen && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

export default Expand;
