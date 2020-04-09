import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0

    
    const [count, setCount] = useState(initialCount) 


    return (
        <div>
            count: {count}
            <button onClick={()=> setCount(count+1)}> Increament</button>
            <button onClick={()=> setCount(count-1)}> Decreament </button>
            <button onClick={()=>  setCount(initialCount)}> Reseat </button>
        </div>
    )
}

export default HookCounterTwo
