import { useState } from 'react'
import './App.css'
import MyButton from './CustomButton'
import React from 'react'
// import {jsx as _jsx} from 'react/jsx-runtime'

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )

// const anotherUser = "TanishqSehgal"

// const createReactElement = React.createElement(
//   'a', // first argument is tagName
//   {href: 'https://google.com', target:'_blank'}, // list of attributes as key value pairs
//   'Click Me to Visit Google -> ', // The text to be container inside the element
//   anotherUser // at the end variables are evaludated if any
// )


function App() {
  // const [count, setCount] = useState(0)
  // Injecting Variables inside the function with jsx
  const userName = "Tanishq";
  return (
    <>
      <h1>Hello World!!</h1>
      <p className="read-the-docs">
        My Username is {userName}. This is my first React Project. 
      </p>
    </>

    // anotherElement
    // createReactElement
  )
}

export default App
