import React from 'react';
import ReaactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');
ReaactDOM.render(<App userId="github" />, rootElement);
