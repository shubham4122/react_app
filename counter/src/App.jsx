import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)

    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Value: {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  )
}

export default App
