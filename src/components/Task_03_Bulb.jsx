import React, { useState, useEffect } from 'react'
import './Task_03_Bulb.css'
import { Link } from 'react-router-dom';

const Task_03_Bulb = () => {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        document.body.className = isOn ? 'on' : 'off';
    }, [isOn]);

    return (
        <div>
            <div className='flex gap-4'>
                <Link to="/" className='text-2xl'>Footer</Link>
                <Link to="/id-card" className='text-2xl'>ID</Link>
                <Link to="/likes-counter" className='text-2xl'>Likes</Link>
            </div>
            <div className="circle"></div>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? 'Switch Off' : 'Switch On'}
            </button>

        </div>
    )
}

export default Task_03_Bulb;
