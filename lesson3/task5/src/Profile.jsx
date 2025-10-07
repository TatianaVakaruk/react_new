import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
const Profile = (props) => {
  const birthDate = props.birthDate;
  const birthDate1 = moment(birthDate).format('DD MMM YY');
  return (
    <>
      <div className="profile__name">
        {props.firstName} {props.lastName}
      </div>
      <div className="profile__birth">{`Was born ${birthDate1} in ${props.birthPlace}`}</div>
    </>
  );
};
export default Profile;
