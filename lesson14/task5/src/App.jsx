import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [visible, toggle] = useState(true);
  return (
    <>
      <button onClick={() => toggle(!visible)}>Toggle</button>
      <span>{visible && <Clock location="NEW YORK" offset={-5} />}</span>
      <span>{visible && <Clock location="KYIV" offset={2} />}</span>
      <span>{visible && <Clock location="LONDON" offset={0} />}</span>
    </>
  );
};
export default App;
