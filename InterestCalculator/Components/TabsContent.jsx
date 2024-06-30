import React from 'react'

function SimpleInterestCalculatorUI({
    principalAmount = 0,
    rateOfInterest = 0,
    timeDuration = 0,
    onPrincipalChange,
    onRateOfInterestChange,
    onTimeDurationChange
}) {
    return (
        <>
            <div className='flex max-h-screen mt-5'>
                <div className='w-full flex flex-col max-h-screen'>

                    <h1 className='text-center text-white'>Simple Interest Calculator</h1>

                    <div className='flex flex-col mt-10'>
                        <p className='text-white text-sm mb-2'>Principal Amount</p>
                        <input value={Number(principalAmount)} onClick={(e) => e.target.value = ''} onChange={(e) => onPrincipalChange && onPrincipalChange(Number(e.target.value))} className='border border-none rounded-xl ps-5 pe-5 text-black' type='number' placeholder='Principal Amount'></input>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <p className='text-white text-sm mb-2'>Rate of Interest Per Anum</p>
                        <input value={Number(rateOfInterest)} onClick={(e) => e.target.value = ''} onChange={(e) => onRateOfInterestChange && onRateOfInterestChange(Number(e.target.value))} className='border border-none rounded-xl ps-5 pe-5 text-black' type='number' placeholder='@%'></input>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <p className='text-white text-sm mb-2'>Duration: </p>
                        <input value={timeDuration}  onChange={(e) => onTimeDurationChange && onTimeDurationChange(Number(e.target.value))} className='border border-none rounded-xl ps-5 pe-5 text-black' type='range' min={0} max={50} placeholder='Duration'></input>
                    </div>

                </div>
            </div>
        </>
    )
}

function CompoundInterestCalculatorUI(
    {
        principalAmount = 1,
        rateOfInterest = 1,
        timeDuration = 1,
        compoundingType = 1,
        onPrincipalChange,
        onRateOfInterestChange,
        onTimeDurationChange,
        onCompoundingTypeChange
    }
) {
    return (
        <>
            <div className='flex max-h-screen mt-5'>
                <div className='w-full flex flex-col max-h-screen md:w-full p-5'>
                    
                    <h1 className='text-center text-white'>
                        Compound Interest Calculator
                    </h1>

                    <div className='flex flex-col mt-10'>
                        <p className='text-white text-sm mb-2'>Principal Amount</p>
                        <input value={Number(principalAmount)} onChange={(e) => principalAmount = Number(e.target.value)} className='border border-none rounded-xl ps-5 pe-5 text-black'type='number' placeholder='Principal Amount'></input>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <p className='text-white text-sm mb-2'>Rate of Interest Per Anum</p>
                        <input value={Number(rateOfInterest)} onChange={(e) => rateOfInterest = Number(e.target.value)} className='border border-none rounded-xl ps-5 pe-5 text-black' type='number' placeholder='@%'></input>
                    </div>

                    <div className='flex flex-col mt-10'>                        
                        <form onChange={(e) => { e.preventDefault }} className='flex flex-row flex-nowrap'>
                            <label htmlFor="Compounding Type" className='text-white'>Select Compunding Type</label>    
                            <select value={compoundingType} onChange={(e) => compoundingType = Number(e.target.value)} name='Compounding Type' className='ms-5 border border-none rounded-xl ps-3 pe-3'>
                                <optgroup>
                                    <option>None</option>
                                    <option value={1}>Compund Anually</option>
                                    <option value={2}>Compund Half Yearly</option>
                                    <option value={4}>Compund Quarterly</option>
                                    <option value={12}>Compund Monthly</option>
                                </optgroup>
                            </select>
                        </form>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <p className='text-white text-sm mb-2'>Duration: </p>
                        <input value={timeDuration} onChange={(e) => timeDuration = Number(e.target.value)} className='border border-none rounded-xl ps-5 pe-5 text-black' type='range' min={0} max={50} step={1} placeholder='Duration'></input>
                    </div>

                </div>
            </div>
        </>
    )
}

export {SimpleInterestCalculatorUI, CompoundInterestCalculatorUI}