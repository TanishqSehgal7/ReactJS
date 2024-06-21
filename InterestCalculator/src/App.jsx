import './App.css'
import { TabLayout } from '../Components/TabLayout'

function App() {

  return (
    <>

      <div className="flex flex-col bg-cyan-950 items-center justify-center min-h-screen">
        <div className="w-full h-1/2 flex-col items-center justify-center">
          <TabLayout 
            activeTabCSSProp='bg-cyan-900 text-white rounded-xl cursor-pointer flex flex-row flex-nowrap w-1/2 text-center p-5 mt-10 ms-10 transition-all bg-opacity-60 cursor-pointer select-none' 
            inActiveTabCSSProp = 'text-white text-2xl cursor-pointer flex flex-row flex-nowrap w-1/2 text-center transition-all p-5 mt-10 me-10 cursor-pointer select-none'
          />
        </div>
      </div>
      
      {/* <div className="flex flex-col justify-center pb-20 w-full item bg-cyan-950 m-10 rounded-xl transition-all "> 
        <TabLayout 
          activeTabCSSProp='bg-cyan-900 text-white rounded-xl cursor-pointer flex flex-row flex-nowrap p-3 w-1/2 transition-all bg-opacity-60 p-5 cursor-pointer select-none' 
          inActiveTabCSSProp = 'text-white text-2xl cursor-pointer flex flex-row flex-nowrap p-3 w-1/2 transition-all p-5 cursor-pointer select-none'
        />
      </div> */}
    </>
  )
}

export default App
