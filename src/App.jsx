import { useState } from 'react'
import './App.css'
import { buttonStyle } from './const/index'
import { Button } from './Button/Button'

function App() {
  const [colors, setColors] = useState('black')
  const colorStyleFunc = () => {
    setColors(colors === 'black' ? 'red' : 'black')
  }
  return (
    <section>
      <h1 style={{ color: colors }}>Title h1</h1>
      < Button
        text="This button + children"
        color="green"
        border="2px solid black"
        width="200px"
        height="200px"
        fontSize="22px"
        padding="20px"
        colorStyleFunc={colorStyleFunc}
        buttonStyle={buttonStyle}
      >
        <p>children 1</p>
        <p>children 2</p>
      </Button>
    </section>
  )
}

export default App
