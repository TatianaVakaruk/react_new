import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location="NEW YORK" offset={-5} />
      <Clock location="LONDON" offset={0} />
      <Clock location="KYIV" offset={2} />
    </>
  );
};
export default App;
