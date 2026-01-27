import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DigitalIDCard = ({
    id,
    name,
    role,
    age,
    mode = "Add",
    onAdd,
    onEdit,
    onDelete
}) => {
    const [formState, setFormState] = useState({
        name: name || "",
        role: role || "",
        age: age || ""
    });

    const [editToggle, setEditToggle] = useState(false);

    useEffect(() => {
        setFormState(formState);
    }, [formState]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdd = () => {
        if (!formState.name || !formState.role || !formState.age) return;
        onAdd(formState);
        setFormState({ name: "", role: "", age: "" });
    };

    const handleEdit = () => {
        onEdit({ id, ...formState });
        setEditToggle(false);
    };

    return (
        <div className="bg-blue-900 text-white">
            <div className="flex p-2 border border-gray-300 rounded-md bg-blue-950 align-center justify-center gap-2">
                <label>Name*</label>
                <input
                    className="border border-gray-300 rounded-md p-2 w-64"
                    name="name"
                    type="text"
                    value={formState.name}
                    disabled={mode !== "Add" && !editToggle}
                    onChange={handleChange}
                />

                <label>Role*</label>
                <input
                    className="border border-gray-300 rounded-md p-2 w-64"
                    name="role"
                    value={formState.role}
                    disabled={mode !== "Add" && !editToggle}
                    onChange={handleChange}
                />

                <label>Age*</label>
                <input
                    className="border border-gray-300 rounded-md p-2 w-64"
                    name="age"
                    type="number"
                    value={formState.age}
                    disabled={mode !== "Add" && !editToggle}
                    onChange={handleChange}
                />

                <div className="flex gap-2">
                    {mode === "Add" ? (
                        <button
                            onClick={handleAdd}
                            className="border border-gray-300 rounded-md cursor-pointer bg-green-800 px-4"
                        >
                            Add
                        </button>
                    ) : (
                        <>
                            {!editToggle ? (
                                <button
                                    onClick={() => setEditToggle(true)}
                                    className="border border-gray-300 rounded-md cursor-pointer bg-blue-800 px-4"
                                >
                                    Edit
                                </button>
                            ) : (
                                <button
                                    onClick={handleEdit}
                                    className="border border-gray-300 rounded-md cursor-pointer bg-green-800 px-4"
                                >
                                    Save
                                </button>
                            )}

                            <button
                                onClick={() => onDelete(id)}
                                className="border border-gray-300 rounded-md cursor-pointer bg-red-800 px-4"
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className='flex gap-4'>
                <Link to="/" className='text-2xl'>Footer</Link>
                <Link to="/likes-counter" className='text-2xl'>Likes</Link>
                <Link to="/bulb" className='text-2xl'>Bulb</Link>
            </div>
        </div>
    );
};

export default DigitalIDCard;
