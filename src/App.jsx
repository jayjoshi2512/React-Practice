import React, { useState } from "react";
import DigitalIDCard from "./components/DigitalIDCard";
import Task_01_Likes from "./components/Task_01_Likes";
import Task_03_Bulb from "./components/Task_03_Bulb";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

    const mainRoutes = [
        {
            path: "/id-card",
            element: <DigitalIDCard />,
        },
        {
            path: "/likes-counter",
            element: <Task_01_Likes />
        },
        {
            path: "/bulb",
            element: <Task_03_Bulb />
        },
        {
            path: "/",
            element: <Footer />
        },
        {
            path: "*",
            element: <h1>404 - Not Found</h1>
        }

    ]
    const [currentID, setCurrentID] = useState(1);
    const [formData, setFormData] = useState([]);

    const handleAdd = (newData) => {
        setFormData([...formData, { ...newData, id: currentID }]);
        setCurrentID(currentID + 1);
    };

    const handleEdit = (updatedData) => {
        setFormData(formData.map(item =>
            item.id === updatedData.id ? updatedData : item
        ));
    };

    const handleDelete = (id) => {
        setFormData(formData.filter(item => item.id !== id));
    };

    return (

        <>
        {/* <div>
            <DigitalIDCard onAdd={handleAdd} />
            {formData.map(item => (
                <DigitalIDCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    role={item.role}
                    age={item.age}
                    mode="view"
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div> */}

        <Router>
            <Routes>
                {mainRoutes.map((route) => (
                    <Route path={route.path} element={route.element} />
                ))}
            </Routes>
        </Router>

        </>
    );
};

export default App;
