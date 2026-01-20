import React from 'react'
import Counter from './pages/Counter';
import RealtimeText from './components/RealtimeText';
import ArrayPractice from './components/ArrayPractice';
import ThemeToggle from './components/ThemeToggle';
import Task_01_Likes from './components/Task_01_Likes';
import Task_02_IDCard from './components/Task_02_IDCard';
import Task_03_Bulb from './components/Task_03_Bulb';
import TextAnalyzer from './components/TextAnalyzer';
import PasswordCheck from './components/PasswordCheck';
import Converter from './components/Converter';

const App = () =>{

    // const data = [
    //     {name: "Stark", role: "Engineer", age: 45},
    //     {name: "Rogers", role: "Captain", age: 95},
    //     {name: "Banner", role: "Scientist", age: 50},
    // ];
    return (
        <div>
            {/* <Counter /> */}
            {/* <RealtimeText /> */}
            {/* <ArrayPractice /> */}
            {/* <ThemeToggle /> */}
            {/* <Task_01_Likes /> */}
            {/* {data.map((p, index) => (
                <Task_02_IDCard 
                    key={index}
                    name={p.name} 
                    role={p.role} 
                    age={p.age} 
                />
            ))} */}
            {/* <Task_03_Bulb /> */}

            {/* <TextAnalyzer /> */}

            {/* <PasswordCheck /> */}

            <Converter />
        </div>
    )
}

export default App;