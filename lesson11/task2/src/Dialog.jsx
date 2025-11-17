import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ onClose, isOpen, children, title }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button onClick={onClose} className="dialog__close-btn">
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};
Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
Dialog.defaultProps = {
  title: '',
  isOpen: false,
};
export default Dialog;
