import React from 'react';

const Filter = ({ filterText, count, onChange }) => {
  let filter;
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        value={filterText}
        onChange={onChange}
        className="filter__input"
      />
    </div>
  );
};

export default Filter;
