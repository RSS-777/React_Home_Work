import React, { useState, useCallback } from "react";
import ChildrenComponent from './ChildrenComponent/ChildrenComponent';

function App() {
  const [color, setColor] = useState('red')
  const [text, setText] = useState('red');
  console.log('Parent rendering');

  const onChange = useCallback((event) => {
    setText(event.target.value)
  }, []);

  const changeColor = () => {
    setColor(color === 'red' ? 'green' : 'red')
  };

  const textDefault = 'Pleas write the text!'

  return (
    <div>
      <h1>Lesson 38</h1>
      <h2 style={{ color: color }}>Input text: {text}</h2>
      <button onClick={changeColor}>Change color</button>
      <ChildrenComponent onChange={onChange} DefaultText={textDefault} />
    </div>
  )
}

export default App
