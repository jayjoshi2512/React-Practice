import React, { useEffect, useState } from 'react'
import './ThemeToggle.css';

const ThemeToggle = () =>{

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        console.log({theme});
        document.body.className = theme;
    }, [theme])
    return (
        <div>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
            <span>Current Theme: {theme}</span>
        </div>
    )
}

export default ThemeToggle;