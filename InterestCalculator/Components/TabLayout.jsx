import React from 'react'
import { useState } from 'react'
import {SimpleInterestCalculatorUI, CompoundInterestCalculatorUI} from '../Components/TabsContent'

export function TabLayout() {

    const [activeTab, setActiveTab] = useState(0)

    const tabsUI = [
        {title:"Simple Interest", content: <SimpleInterestCalculatorUI/>},
        {title:"Compound Interest", content:<CompoundInterestCalculatorUI/>}
    ];

    const handleClick = (index) => {
        setActiveTab(index)
    }

    return (
        <>
            {/* <div className='flex flex-col'> */}

                <div className='flex flex-row justify-evenly'>
                        {tabsUI.map(
                            (tab, index) => (
                                <button key={index} 
                                    className={`cursor-pointer flex-1 py-2 text-center ${activeTab === index? 'bg-green-500 text-white text-2xl' : 'text-black text-2xl' }`}
                                    onClick={() => handleClick(index)}>
                                    {tab.title}
                                </button>
                        ))}
                </div>

                <div className='p-4 w-full flex-auto justify-normal p-5 m-5'>
                    {/* <h1 className='text-5xl text-blue-800'>Heading</h1> */}
                    {tabsUI[activeTab] && tabsUI[activeTab].content}
                </div>
        </>
    );
}
