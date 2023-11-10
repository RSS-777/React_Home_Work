import { useState } from 'react'
import './App.css'

const CustomButton = ({ backgroundColor, textColor, borderRadius, text }) => {
  const buttonStyles = {
    backgroundColor: backgroundColor || 'blue',
    color: textColor || 'white',
    borderRadius: borderRadius || '5px',
    padding: '10px',
    margin: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyles}>
      {text}
    </button>
  );
};

const App = () => {
  return (
    <div>
      <CustomButton backgroundColor="red" textColor="white" text="Button 1" />
      <CustomButton backgroundColor="green" textColor="black" borderRadius="8px" text="Button 2" />
      <CustomButton backgroundColor="yellow" textColor="red"  text="Button 3" />
      <CustomButton text="Button 4" borderRadius={"20px"}/>
    </div>
  );
};

export default App;