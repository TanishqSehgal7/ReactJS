import React, { useEffect } from 'react'
import { useState } from 'react'
import {SimpleInterestCalculatorUI, CompoundInterestCalculatorUI} from '../Components/TabsContent'

export function TabLayout(
    {
    activeTabCSSProp="",
    inActiveTabCSSProp=""}
) {

    const [activeTab, setActiveTab] = useState(0)
    const [activeTabCSS, setActiveTabCSS] = useState(activeTabCSSProp)
    const [inActiveTabCSS, setInActiveTabCSS] = useState(inActiveTabCSSProp)

    const tabsUI = [
        {title:"Simple Interest", content: <SimpleInterestCalculatorUI/>},
        {title:"Compound Interest", content:<CompoundInterestCalculatorUI/>}
    ];

    const HandleClick = (index) => {
        setActiveTab(index)
        useEffect(() => {
            setActiveTabCSS('bg-green-500 text-white text-2xl')
            setInActiveTabCSS('text-white text-2xl')
        }, [activeTab, activeTabCSS, inActiveTabCSS])
    }

    return (
        <>
            {/* <div className='flex flex-col'> */}
                <div className='flex flex-row justify-evenly text-2xl'>
                        {tabsUI.map(
                            (tab, index) => (
                                <button key={index} 
                                    className={`cursor-pointer flex flex-row flex-wrap py-2 text-center 
                                    ${ activeTab === index? `${activeTabCSS}` : `${inActiveTabCSS}` }`}
                                    onClick={() => HandleClick(index)}>
                                    {tab.title}
                                </button>
                        ))}
                </div>

                <div className='w-full flex-auto justify-normal p-10 items-center bg-slate-900 text-2xl'>
                    {/* <h1 className='text-5xl text-blue-800'>Heading</h1> */}
                    {
                        tabsUI[activeTab] && tabsUI[activeTab].content
                    }
                </div>
        </>
    );
}