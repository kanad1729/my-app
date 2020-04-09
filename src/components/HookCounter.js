import React, {useState} from 'react';

function HookCounter() {

    // this array destructuring feature of ES6. setting up counter using functionl component and setting up states using hooks consept of react rather doing it via class component
    // here count is variable i.e state and setCount is simple methos to set up count state.
    // useState is inbuilt method use to set state using hooks consept 0 parameter of this method is initial value for count variable
    
    const [count, setCount] = useState(0) 

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Counter {count}</button>
        </div>
    )
}

export default HookCounter
