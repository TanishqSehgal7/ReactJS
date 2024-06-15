import {useState} from 'react'
import './App.css'
import InputBox from "./Components/InputBox"
import useCurrencyInfoFromApi from './Hooks/UseCurrencyInfo'

function App() {

  const [amount, setAmount] = useState("")
  const [to, setTo] = useState("inr")
  const [from, setFrom] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  console.log(`From: ${from}`)
  const currencyInfo = useCurrencyInfoFromApi(from)
  console.log(`CurrencyInfo: ${currencyInfo}`)
  const currencyOptions = Object.keys(currencyInfo)
  console.log(`CurrencyOptions: ${currencyOptions}`)

  const swap = () => {
    setFrom(to)
    setTo(from)
    if(amount && convertedAmount) {
      setConvertedAmount(amount)
      setAmount(convertedAmount)
    } 
  }

  const convert = () => { setConvertedAmount(amount * currencyInfo[to]) }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center
      bg-cover bg-no-repeat'
      style={
        {backgroundImage: `url('${"https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}')`}
      }>

        <form onSubmit={(e) => {
          e.preventDefault();
          convert()
        }} className="p-5 bg-gray-300 rounded-lg bg-opacity-50">

          <div className='w-full mb-1'>
            
            <InputBox className="w-full mb-1" label="From" 
              amount={amount}
              onAmountChange = {(amount) => setAmount(amount)}
              currencyOptions= {currencyOptions} 
              onCurrencyChange= {(curr) => setFrom(curr)}
              selectCurrency={from}
              amountDisabled = {false}
              curencyDisabled = {false}/>
          </div>
        
          <div className='relative w-full h-0.5 p-5'>
            <button type="button" onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                SWAP
            </button>
          </div>

          <div className="w-full mb-4">
            <InputBox className="w-full mb-1" label="To" 
            amount = {convertedAmount}
            currencyOptions={currencyOptions} 
            onCurrencyChange = {(curr) => setTo(curr)}
            selectCurrency={to}
            amountDisabled = {true}
            currencyDisabled = {false}/>
          </div>
        
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg p-5">
            Convert from {from.toUpperCase()} to {to.toUpperCase()}
          </button>

          {/* <div className="flex flex-row items-center space-x-4"> 
              <button type="button" onClick={swap}
                className="w-1/4 bg-blue-600 text-white px-4 py-3 rounded-lg p-5">
                  SWAP
              </button>

              <button type="submit" className="w-3/4 bg-blue-600 text-white px-4 py-3 rounded-lg p-5">
                Convert from {from.toUpperCase()} to {to.toUpperCase()}
              </button>

              <button type="button" onClick={swap}
                className="w-1/4 bg-blue-600 text-white px-4 py-3 rounded-lg p-5">
                  SWAP
              </button>
          </div> */}

        </form>

      </div>

    </>
  )
}

export default App
