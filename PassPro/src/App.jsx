import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(10)
  const [isNumAllowed, setIsNumAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook - initially there is no reference for our password hook
  const passwordRef = useRef(null)
  
   // useCallBack hook lets us cache a function definition between re-renders
   // it memoizes the function and keeps track of changes in different values in cache
  const passwordGenetator = useCallback(() => {

    let pass = ""
    let strDict = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumAllowed){
      strDict+= "0123456789"
    }
    if(isCharAllowed) {
      strDict += "!@#$%^&*(){}[];/><?~"
    }

    for (let i = 1; i <= length; i++) {
      let randomCharPos = Math.floor(Math.random()*strDict.length + 1)
      pass += strDict.charAt(randomCharPos)
    }
    setPassword(pass)

  }, [length,isNumAllowed,isCharAllowed,setPassword])

  // useEffect is a React Hook which lets us synchronize external system
  useEffect(()=>{
    passwordGenetator()
  }, [length,isNumAllowed,isCharAllowed,passwordGenetator])

  // copy password to clipboard
  const copyPasswordToClipboard = useCallback(()=> {
    // take password reference into hook for more optimization
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    // copy password to clipboard here and useCallBack stores it in cache and optimizes it
    window.navigator.clipboard.writeText(password)
  }, [password])

  /*useRef Hook: it is a reference hook in react which returns a mutable reference object 
   whose .current property is initialized to the passed argument (initialValue) The returned object
   will persist for the full lifetime of the component.
   It is used to take the reference of any component in react*/

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-slate-900 m-20 align-middle'>

        <h1 className='text-white text-center p-5 text-3xl overflow-hidden'>PassPro</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3 rounded-s-lg' placeholder='Password' readOnly ref={passwordRef}></input>
          <button className='copy outline-none bg-blue-900 text-white px-4 py-0.5 shrink-0 rounded-e-lg cursor-pointer select-none '
            onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 flex-wrap'>

          <div className='flex flex-wrap items-center gap-x-1'>
            
            <input type="range" min={5} max={30} value={length} className='cursor-pointer' 
            onChange={
              (e) => {setLength(e.target.value)}
            }/>

            <label className='text-white'>Length: {length}</label>
          </div>

          <div className='flex text-sm gap-x-2'>
            <input type="checkbox" value={isNumAllowed} className='cursor-pointer' 
            onChange={
              () => {setIsNumAllowed((previousValue)=>!previousValue)}
            } defaultChecked={isCharAllowed}/>

            <label className='text-white'>Numbers</label>
          </div>

          <div className='flex text-sm gap-x-2'>
            <input type="checkbox" value={isCharAllowed} className='cursor-pointer'
            onChange={
              () => {setIsCharAllowed((previousValue)=>!previousValue)}
            } defaultChecked={isCharAllowed}/>
            
            <label className='text-white'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
