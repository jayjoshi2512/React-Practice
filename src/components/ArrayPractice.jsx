import React, { useState } from 'react';

const ArrayPractice = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        if (inputValue.trim() === '') return;
        setItems([...items, inputValue]);
        setInputValue('');
    };

    const handleDeleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleButtonClick}>Add Item</button>
            <ol>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => handleDeleteItem(index)}>Delete</button>
                    </li>
                ))}
            {/* <span>{items.join(', ')}</span> */}
            </ol>
        </div>
    );
};

export default ArrayPractice;
