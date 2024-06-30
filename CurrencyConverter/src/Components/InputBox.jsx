import React, { useId } from "react";

function InputBox(
    {label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className=""}
) {
    const amountInputId = useId()

    return (
        <div className={`bg-white text-black p-3 rounded-lg text-sm flex flex-wrap
        ${className}`}>
            <div className="w-1/2">

                <label htmlFor={amountInputId} className="text-black mb-2 inline-block">
                    {label}
                </label>

                <input className="bg-slate-200 p-2 rounded-lg w-full bg-transparent py-1.5"
                id={amountInputId}
                type="number" 
                placeholder="Amount" 
                disabled={amountDisabled}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
                
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                
                <p className="text-white/100 mb-2 w-full">Currency Type</p>

                <select className="rounded-lg px-1 py-1 text-black/100 bg-slate-200 p-2 cusror-pointer outline-none"
                    value={selectCurrency} 
                    disabled = {currencyDisabled}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                        {
                            currencyOptions.map((currency) => (
                                <option key={currency} value={currency} className="text-black/100 bg-slate-200 p-2">{currency.toUpperCase()}</option>
                            ))
                        }
                </select>
            </div>

        </div>
    );
}

export default InputBox;