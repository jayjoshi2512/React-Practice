import React from 'react'
import './Task_02_IDCard.css'

const Task_02_IDCard = ({id, name, role, age, handleDelete}) =>{
    return (
        <div className={`card ${role}`}>
            <h2>ID Card</h2>
            <div>
                <p>Name: {name}</p>
                <p>Role: {role}</p>
                <p>Age: {age}</p>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Task_02_IDCard;