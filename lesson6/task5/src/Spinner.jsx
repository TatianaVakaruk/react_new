import React from 'react';
const Spinner = (props) => {
  return (
    <span
      style={{ width: props.size, height: props.size }}
      className="spinner"
    ></span>
  );
};
export default Spinner;
