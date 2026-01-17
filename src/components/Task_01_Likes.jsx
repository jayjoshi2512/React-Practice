import React, { useState } from 'react'

const Task_01_Likes = () => {

    const [likes, setLikes] = useState(0);
    function addLike() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <h1>My Photo App</h1>
            <div className="card">
                <img src="https://via.placeholder.com/150" alt="Placeholder" />
                <p>Total Likes: {likes}</p>
                <button onClick={addLike}>Like Photo</button>
            </div>
        </div>
    )
}

export default Task_01_Likes;

// Task_01_Likes.jsx:16 Invalid event handler property `onclick`. Did you mean `onClick`? - changed onclick to onClick

// Task_01_Likes.jsx?t=1768651629192:16 Invalid DOM property `class`. Did you mean `className`? - changed class to className

// Uncaught TypeError: Assignment to constant variable.
//    at addLike (Task_01_Likes.jsx:7:9)                - changed like = (like + 1) to setLikes(likes + 1);