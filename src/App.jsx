import { useState } from 'react'
import { Button } from './Button/Button'

const App = () => {
  const [newColor, setNewColor] = useState('black');
  const changeColor = (color) => {
    setNewColor(color)
  }
  const [newTextColor, setNewTextColor] = useState('white');
  const changeTextColor = (color) => {
    setNewTextColor(color)
  }
  const [newBorder, setNewBorder] = useState('5px');
  const changeBorder = (border) => {
    setNewBorder(border)
  }
  return (
    <section>
      <div>
        <input
          type="radio"
          id='color1'
          name='color'
          value='red'
          onChange={() => {
            changeColor('red')
            changeTextColor('black')
            changeBorder('10px')
          }}
        />
        <label for="color1">Style 1</label>
      </div>
      <div>
        <input
          type="radio"
          id='color2'
          name='color'
          value='green'
          onChange={() => {
            changeColor('green')
            changeTextColor('yellow')
            changeBorder('15px')
          }}
        />
        <label for="color2">Style 2</label>
      </div>
      <div>
        <input
          type="radio"
          id='color3'
          name='color'
          value='blue'
          onChange={() => {
            changeColor('blue')
            changeTextColor('red')
            changeBorder('20px')
          }}
        />
        <label for="color3">Style 3</label>
      </div>
      <div>
        <Button backgroundColor={newColor} textColor={newTextColor} borderRadius={newBorder} text="Button 1" />
      </div>
    </section>

  );
};

export default App;