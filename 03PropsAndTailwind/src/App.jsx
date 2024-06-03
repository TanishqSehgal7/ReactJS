import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCard from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username: "Tanishq",
    age: 24,
    email: "tsgl7246@gmail.com",
    occupation: "Software Developer"
  }

  const newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-md text-black'>Tailwind and Props</h1>
      <MyCard  userName="Tanishq Sehgal" someObj = {myObj} someArr={newArr}/>
      
    </>
  )
}

export default App
