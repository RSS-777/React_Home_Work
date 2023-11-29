import { useRef, useState } from "react";
import { ColorPicker } from './components/ColorPicker';
import './App.css'

function App() {
  const [val, setVal] = useState(null)
  const ref = useRef(null)
  const colorRef = useRef(null)

  const showValue = () => {
    const value = ref.current.value;
    setVal(value)
  }

  const buttonColor = () => {
    if (ref.current.value !== '') {
      if (colorRef.current.classList.contains('btn-off')) {
        colorRef.current.classList.toggle('btn-on')
        colorRef.current.classList.remove('btn-off')
      } else {
        colorRef.current.classList.remove('btn-on');
        colorRef.current.classList.toggle('btn-off')
        ref.current.value = ''
        setVal('')
      }
    }
  }

  const style = {
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#FCEBEB',
    width: '200px',
    height: '25px',
    color: 'green',
    marginBottom: '10px'
  }

  return (
    <div>
      <h1>Lesson 40</h1>
      <div className="show-info">{val}</div>
      <ColorPicker ref={ref} style={style} />
      <button
        onClick={() => { showValue(), buttonColor() }}
        className="button"
      >
        <span>show</span>&nbsp;&nbsp;&nbsp;
        <span>hide</span>
        <div className="btn-off" ref={colorRef}></div>
      </button>
    </div>
  )
}

export default App
