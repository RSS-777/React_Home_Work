import React, { useState } from "react"
import Header from "./Header/Header"
import Post from "./Post/Post"
import { UserProvider } from './contexts/UserGetContext'
import './App.css'


function App() {
  const [color, setColor] = useState('white');

  const changeColor = () => {
    setColor(color === 'white' ? 'black' : 'white')
  }

  return (
    <UserProvider>
      <div className={`${color === 'white' ? 'theme-white' : 'theme-dark'} wrapper`}>
        <h1>Lesson 39</h1>
        <button className="btn-theme" onClick={changeColor}>dark/white</button>
        < Header />
        < Post />
      </div>
    </UserProvider>
  )
}

export default App
