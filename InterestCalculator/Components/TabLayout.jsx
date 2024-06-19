import React, { useEffect } from 'react'
import { useState } from 'react'
import {SimpleInterestCalculatorUI, CompoundInterestCalculatorUI} from '../Components/TabsContent'

export function TabLayout(
    {
    activeTabCSSProp="",
    inActiveTabCSSProp=""
}
) {

    const [activeTab, setActiveTab] = useState(0)

    const tabsUI = [
        {title:"Simple Interest", content: <SimpleInterestCalculatorUI/>},
        {title:"Compound Interest", content:<CompoundInterestCalculatorUI/>}
    ];

    const HandleClick = (index) => {
        setActiveTab(index)
    }

    return (
        <>
            <div className='flex flex-row justify-evenly text-2xl border border-white rounded-xl text-center'>
                    {tabsUI.map(
                        (tab, index) => (
                            <div key={index} 
                                className={
                                `${ activeTab === index? `${activeTabCSSProp && activeTabCSSProp}` : `${inActiveTabCSSProp && inActiveTabCSSProp}` }`
                            }
                            onClick={() => HandleClick(index)}>
                                {tab.title}
                            </div>
                    ))}
            </div>

            <div className='flex-col text-2xl'>
                {
                    tabsUI[activeTab] && tabsUI[activeTab].content
                }
            </div>
        </>
    );
}