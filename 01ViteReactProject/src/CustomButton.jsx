import { useState } from 'react'

function MyButton() {
    let buttonClickStatus = "";
    const [count, setCount] = useState(0)
    const incrementCounter = () => setCount(count+1)
    buttonClickStatus += `Button clicked ${count} times`
    return (
        <>
            <div className='customButton' onClick={incrementCounter()}>Custom Button React Component</div>
            <p className="buttonClickStatus">{buttonClickStatus}</p>
        </>
    )
}

export default MyButton