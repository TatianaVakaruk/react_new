import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = (props) => {
  return (
    <div className="greeting">{`My name is ${props.user.firstName} ${
      props.user.lastName
    }. I am ${props.user.getYearDifference()} years old`}</div>
  );
};
export default Greeting;
