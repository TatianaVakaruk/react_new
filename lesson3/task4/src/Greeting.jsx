import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = (props) => {
  const now = new Date();

  let years = now.getFullYear() - props.birthDate.getFullYear();

  // Учитываем месяц и день, чтобы результат был точным
  const hasNotHadBirthdayThisYear =
    now.getMonth() < props.birthDate.getMonth() ||
    (now.getMonth() === props.birthDate.getMonth() &&
      now.getDate() < props.birthDate.getDate());

  if (hasNotHadBirthdayThisYear) {
    years--;
  }

  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${years} years old`}</div>
  );
};
export default Greeting;
