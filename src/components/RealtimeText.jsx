import React, { useState } from 'react'
import './RealtimeText.css';
const RealtimeText = () => {

    const [text, setText] = useState('');

    return (
        <div>
            <h1>Hello, {text}</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>

    )
}

export default RealtimeText;