import React, {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const increase = ()=> setCount(count+1);
    const decrease = ()=> setCount(count-1);
    const reset = ()=> setCount(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <br></br><br></br>
            <button onClick={reset}>Reset</button>
        </div>
    )
}