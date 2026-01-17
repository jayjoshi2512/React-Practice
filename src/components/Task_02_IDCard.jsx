import React from 'react'
import './Task_02_IDCard.css'

const Task_02_IDCard = ({name, role, age}) =>{
    return (
        <div className={`card ${role}`}>
            <h2>ID Card</h2>
            <div>
                <p>Name: {name}</p>
                <p>Role: {role}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    )
}

export default Task_02_IDCard;