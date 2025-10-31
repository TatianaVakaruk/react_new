import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }
  componentDidMount() {
    console.log('componentDidMount: Api calls, subscriptions');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      'shouldComponentUpdate(nextProps, nextState): decide to render or not to render'
    );
    return nextProps.number % 2;
  }
  componentWillUnmount(prevProps, prevState) {
    console.log(
      'componentWillUnmount():cleanup before Dom related to component will be removed'
    );
  }
  componentDidUpdate() {
    console.log(
      'componentDidUpdate(prevProps, prevState): some updates based on new props'
    );
  }
  render() {
    console.log('return React element to build DOM');
    return <div>{this.props.number}</div>;
  }
}
export default Life;
