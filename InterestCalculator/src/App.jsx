import './App.css'
import { TabLayout } from '../Components/TabLayout'

function App() {

  return (
    <>
      <div className="flex flex-col justify-evenly pb-20 w-auto item bg-cyan-950 m-10 rounded-xl transition-all"> 
        
        <TabLayout 
          activeTabCSSProp='bg-cyan-900 text-white rounded-xl cursor-pointer flex flex-row flex-nowrap p-3 w-1/2 transition-all bg-opacity-60' 
          inActiveTabCSSProp = 'text-white text-2xl cursor-pointer flex flex-row flex-nowrap p-3 w-1/2 transition-all'
        />
      
      </div>
    </>
  )
}

export default App
