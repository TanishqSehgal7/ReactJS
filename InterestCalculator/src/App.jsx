import './App.css'
import { TabLayout } from '../Components/TabLayout'

function App() {

  return (
    <>
      <div className="flex flex-col justify-evenly w-auto p-20 item bg-slate-700 m-10 rounded-xl transition-all"> 
        
        <TabLayout 
          activeTabCSSProp='bg-slate-600 text-white text-center rounded-xl cursor-pointer flex flex-row flex-nowrap p-3 w-1/2 transition-all' 
          inActiveTabCSSProp = 'text-white text-center text-2xl cursor-pointer flex flex-row flex-nowrap p-3 w-1/2 transition-all'
        />
      
      </div>
    </>
  )
}

export default App
