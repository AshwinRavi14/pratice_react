import React, { useState } from 'react';
import Button from '../Button/Button';

function UserForm() {
    const [Username, setName] = useState({
        User: "", 
        age: ""   
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`User: ${Username.User}, Age: ${Username.age}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setName((prevState) => ({
            ...prevState, 
            [name]: value 
        }));
        console.log(`Updated ${name}: ${value}`); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    name="User" 
                    value={Username.User} 
                    onChange={handleChange} 
                    placeholder="Enter your name"
                />
            </label>
            <br />
            <label>
                Age:                
                <input 
                    type="number" 
                    name="age" 
                    value={Username.age} 
                    onChange={handleChange} 
                    placeholder="Enter your age"
                />
            </label>
            <br />
            <Button value="Submit" />
        </form>
    );
}

export default UserForm;
