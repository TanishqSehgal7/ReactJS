import './App.css'
import { TabLayout } from '../Components/TabLayout'

function App() {

  return (
    <>
      <div className="flex flex-col justify-evenly w-auto p-20 item bg-blue-950 m-10 rounded-xl border border-white">
        <TabLayout activeTabCSSProp='bg-blue-300 text-black border border-white p-2 rounded-xl' 
        inActiveTabCSSProp = 'text-white text-2xl'/>
      </div>
    </>
  )
}

export default App
