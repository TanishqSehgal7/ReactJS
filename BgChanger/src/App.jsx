import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='view'
      style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">

          <div className='flex flex-wrap px-3 py-3 bg-white rounded-md'>
            
            <button className='outline-none px-4' style={{backgroundColor:"Red"}}
            onClick={() => setColor("Red")}>Red</button>

            <button className='outline-none px-4' style={{backgroundColor:"Blue"}}
            onClick={() => setColor("Blue")}>Blue</button>

            <button className='outline-none px-4' style={{backgroundColor:"Green"}}
            onClick={() => setColor("Green")}>Green</button>

            <button className='outline-none px-4' style={{backgroundColor:"Yellow"}}
            onClick={() => setColor("Yellow")}>Yellow</button>

            <button className='outline-none px-4' style={{backgroundColor:"Pink"}}
            onClick={() => setColor("Pink")}>Pink</button>

            <button className='outline-none px-4' style={{backgroundColor:"Purple"}}
            onClick={() => setColor("Purple")}>Voilet</button>

            <button className='outline-none px-4' style={{backgroundColor:"Orange"}}
            onClick={() => setColor("Orange")}>Orange</button>

            <button className='outline-none px-4' style={{backgroundColor:"Indigo"}}
            onClick={() => setColor("Indigo")}>Indigo</button>

            <button className='outline-none px-4' style={{backgroundColor:"rgb(76, 57, 32)"}}
            onClick={() => setColor("rgb(76, 57, 32)")}>Brown</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
