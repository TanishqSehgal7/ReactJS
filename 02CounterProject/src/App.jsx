import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  /*
  using useState Hook -> responsible for 
  changing state of UI which is propagated to the DOM
  useState() takes up a value which could be of any data
  type. Usually an initial value to the variables is given
  here.

  Use State provides 2 values in array format

  setCounter becomes a methods which controls the variable
  counter
  */
  const [counter, setCounter] = useState(0)

  // let counter = 5
  const addValue = () => {
    if(counter<20) {
      setCounter(counter+1)
    } else {
      alert("Counter Value cannot be more than 20")
    }
    console.log(`Counter Value after Addition: ${counter}`)
  }

  const subtractValue = () => {
    if(counter<=0) {
      alert("Counter Value cannot be Negative")
    } else {
      setCounter(counter-1)
    }
    console.log(`Counter Value after Subtraction: ${counter}`)
  }
 
  return (
    <>
      <h1>React JS Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <div className="buttonContainer">
        <button onClick={addValue}>Add Value</button>
        <br></br>
        <button onClick={subtractValue}>Substract Value</button>
      </div>
    </>
  )
}

export default App
