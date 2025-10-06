import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="Tom"
    lastName="Semuel"
    birthDate={new Date('1985-10-08')}
  />,
  rootElement
);
