import React from 'react'
import Counter from './pages/Counter';
import RealtimeText from './components/RealtimeText';
import ArrayPractice from './components/ArrayPractice';
import ThemeToggle from './components/ThemeToggle';
import Task_01_Likes from './components/Task_01_Likes';
import Task_02_IDCard from './components/Task_02_IDCard';

const App = () =>{
    return (
        <div>
            {/* <Counter /> */}
            {/* <RealtimeText /> */}
            {/* <ArrayPractice /> */}
            {/* <ThemeToggle /> */}
            {/* <Task_01_Likes /> */}
            <Task_02_IDCard name="Stark" role="Engineer" age={45} />
            <Task_02_IDCard name="Rogers" role="Captain" age={95} />
            <Task_02_IDCard name="Banner" role="Scientist" age={50} />
        </div>
    )
}

export default App;