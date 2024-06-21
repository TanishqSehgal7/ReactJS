import React from 'react'

function SimpleInterestCalculatorUI() {
    return (
        <>
            <div className='flex flex-col min-h-screen justify-center items-center text-white'>
                <h1 className='text-center'>Simple Interest Calculator</h1>

                <div className='flex flex-col w-1/2'>
                    <p className='p-5'>Principal Amount</p>
                    <input className='p-3' type='number' placeholder='Principal Amount'></input>
                </div>

                <div className='flex flex-col w-1/2'>
                    <p className='p-5'>Rate of Interest Per Anum</p>
                    <input className='p-3' type='number' placeholder='@%'></input>
                </div>

                <div className='flex flex-col w-1/2'>
                    <p className='p-5'>Duration</p>
                    <input className='p-3' type='range' min={1} max={50} defaultValue={1} step={1} placeholder='Duration'></input>
                </div>

            </div>
        </>
    )
}

function CompoundInterestCalculatorUI() {
    return (
        <>
            <div className='flex flex-col min-h-screen justify-center items-center text-white'>
                <h1 className='text-center'>Compound Interest Calculator</h1>

                <div className='flex flex-col w-1/2'>
                    <p className='p-5'>Principal Amount</p>
                    <input className='p-3' type='text' placeholder='Principal Amount'></input>
                </div>

                <div className='flex flex-col w-1/2'>
                    <p className='p-5'>Rate of Interest Per Anum</p>
                    <input className='p-3' type='number' placeholder='@%'></input>
                </div>

                <div className='flex flex-col w-1/2'>
                    <p className='p-5'>Duration</p>
                    <input className='p-3' type='range' min={1} max={50} defaultValue={1} step={1} placeholder='Duration'></input>
                </div>

            </div>
        </>
    )
}

export {SimpleInterestCalculatorUI, CompoundInterestCalculatorUI}