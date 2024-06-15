import {useState} from 'react'
import './App.css'
import InputBox from "./Components/InputBox"
import useCurrencyInfoFromApi from './Hooks/UseCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
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
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => { setConvertedAmount(amount * currencyInfo[to]) }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center
      bg-cover bg-no-repeat'
      style={
        {backgroundImage: `url('${"https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-Financial-Management.jpg.optimal.jpg"}')`}
      }>

        <form onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}>

          <div className='w-full mb-1 p-5'>
            
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

          <div className="w-full mt-1 mb-4 p-5">
            <InputBox className="w-full mb-1" label="To" 
            amount = {convertedAmount}
            currencyOptions={currencyOptions} 
            onCurrencyChange = {(curr) => setTo(curr)}
            amountDisabled = {true}
            currencyDisabled = {false}/>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg p-5">
            Convert from {from.toUpperCase()} to {to.toUpperCase()}
          </button>

        </form>

      </div>

    </>
  )
}

export default App
