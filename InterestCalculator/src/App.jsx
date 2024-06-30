import './App.css'
import {useCallback, useEffect, useState } from 'react';
import {SimpleInterestCalculatorUI, CompoundInterestCalculatorUI} from '../Components/TabsContent'

function App() {

  const [activeTab, setActiveTab] = useState(0)
  const [principal, setPrincipal] = useState(0)
  const [rate, setRate] = useState(0)
  const [duration, setDuration] = useState(0)
  const [interest, setInterest] = useState(0)
  const [compundingType, setCompoundingType] = useState(0)

  const tabsUI = [
      {title:"Simple Interest", content: <SimpleInterestCalculatorUI 
        principal = {principal}
        rateOfInterest={rate}
        timeDuration={duration}
        onPrincipalChange = {(principal) => setPrincipal(principal)}
        onRateOfInterestChange= {(rate) => setRate(rate)}
        onTimeDurationChange = {(duration) => setCompoundingType(duration)}
      />},

      {title:"Compound Interest", content:<CompoundInterestCalculatorUI 
        principal = {principal}
        rateOfInterest={rate}
        timeDuration={duration}
        compoundingType={compundingType}
        onPrincipalChange={(principal) => setPrincipal(principal)}
        onRateOfInterestChange={(rate) => setRate(rate)}
        onTimeDurationChange={(duration) => setDuration(duration)}
        onCompoundingTypeChange={(compundingType) => setCompoundingType(compundingType)}
      />}
  ];

  const HandleClick = (index) => {
      setActiveTab(index)
  }

  const calculateSiOrCiAsPerTab = useCallback(() => {

    if(tabsUI[activeTab].content == SimpleInterestCalculatorUI) {
        
      useEffect(() => {
        calculateSI(principal, rate, duration)
      }, [activeTab, principal, rate, duration, interest])
      
    } else if(tabsUI[activeTab].content === CompoundInterestCalculatorUI) {
      
      useEffect(() => {
        calculateCI(principal, rate, duration, compundingType, interest)
      }, [activeTab, principal, rate, duration, compundingType, interest])
    
    }

  }, [activeTab, principal, rate, duration, compundingType, interest])

  const calculateSI = (p, r, d) => {
    setInterest(Math.floor((p*r*d)/100))
    console.log(`SI Calculated: ${interest}`)
  }


  const calculateCI = (p,r,d,ct) => {
    setInterest(Math.floor(
      p * Math.pow((1+(r/ct),(ct*d))
    )))
    console.log(`CI Calculated: ${interest}`)
  }

  return (
    <>
            <div className="flex flex-col bg-cyan-950 h-screen">
              
              <div className='w-auto flex flex-row justify-evenly text-2xl m-5 border border-white rounded-xl'>
                      {tabsUI.map(
                          (tab, index) => (
                              <div key={index} 
                                  className={ 
                                  `${ activeTab === index? "bg-cyan-900 w-full text-white rounded-xl text-center p-5 transition-all bg-opacity-60 cursor-pointer select-none" 
                                    : "text-white text-2xl w-full text-center transition-all p-5 cursor-pointer select-none" }`
                              }
                              onClick={() => HandleClick(index)}>
                                  {tab.title}
                              </div>
                      ))}
              </div>

              <div className='flex h-screen w-auto justify-center'>
                <div className='flex flex-col justify-evenly'>
                    {
                        tabsUI[activeTab] && tabsUI[activeTab].content
                    }
                </div>
              </div>

              <div className='flex flex-row justify-center w-auto flex-nowrap'>
                <button onClick={() => calculateSiOrCiAsPerTab()} className='bg-cyan-900 border border-white rounded-xl p-5 text-white justify-center mb-10 hover:bg-cyan-800 '>Calculate Interest</button>
              </div>

            </div>
    </>
  )
}

export default App
