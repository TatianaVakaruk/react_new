import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';
const userData = {
  firstName: 'John',
  lastName: 'Doe',
  date1: '1985-10-07',

  getYearDifference() {
    const now = new Date();
    const pastDate = new Date(this.date1);

    let years = now.getFullYear() - pastDate.getFullYear();

    // Учитываем месяц и день, чтобы результат был точным
    const hasNotHadBirthdayThisYear =
      now.getMonth() < pastDate.getMonth() ||
      (now.getMonth() === pastDate.getMonth() &&
        now.getDate() < pastDate.getDate());

    if (hasNotHadBirthdayThisYear) {
      years--;
    }
    return years;
  },
};

const rootElement = document.querySelector('#root');

ReactDOM.render(<Greeting user={userData} />, rootElement);
