import React, { useState } from 'react'
import './CounterComponent.css';

const CounterComponent = () =>{
    const [Count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(Count + 1);
    }
    const handleDecrement = () => {
        setCount(Count - 1);
    }
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{Count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default CounterComponent;