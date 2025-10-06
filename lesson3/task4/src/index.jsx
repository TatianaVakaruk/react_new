import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';
const userData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('1985-10-07'),

  getYearDifference() {
    const now = new Date();

    let years = now.getFullYear() - this.birthDate.getFullYear();

    // Учитываем месяц и день, чтобы результат был точным
    const hasNotHadBirthdayThisYear =
      now.getMonth() < this.birthDate.getMonth() ||
      (now.getMonth() === this.birthDate.getMonth() &&
        now.getDate() < this.birthDate.getDate());

    if (hasNotHadBirthdayThisYear) {
      years--;
    }
    return years;
  },
};

const rootElement = document.querySelector('#root');

ReactDOM.render(<Greeting user={userData} />, rootElement);
