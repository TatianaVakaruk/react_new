import React from 'react';

const UserForm = ({ userData, handleChange }) => {
  return (
    <form className="user-form">
      <input
        type="text"
        value={userData.firstName}
        name="firstName"
        className="user-form__input"
        onChange={handleChange}
      />
      <input
        type="text"
        value={userData.lastName}
        name="lastName"
        className="user-form__input"
        onChange={handleChange}
      />
    </form>
  );
};
export default UserForm;
