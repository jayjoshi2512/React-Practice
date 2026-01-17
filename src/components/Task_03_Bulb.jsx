import React, { useState, useEffect } from 'react'
import './Task_03_Bulb.css'

const Task_03_Bulb = () => {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        document.body.className = isOn ? 'on' : 'off';
    }, [isOn]);

    return (
        <div>
            <div className="circle"></div>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? 'Switch Off' : 'Switch On'}
            </button>

        </div>
    )
}

export default Task_03_Bulb;
