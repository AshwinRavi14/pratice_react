import React, { useState } from 'react';
import Button from '../Button/Button';
import './UserForm.css'

function EnhancedUserForm() {
    const [form, setForm] = useState({
        name: "",
        age: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        age: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, age } = form;

        if (name.length < 3) {
            setErrors((prevErrors) => ({ ...prevErrors, name: "Name must be at least 3 characters long." }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
        }

        if (age <= 0 || isNaN(age)) {
            setErrors((prevErrors) => ({ ...prevErrors, age: "Age must be a positive number." }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, age: "" }));
        }

        if (name.length >= 3 && age > 0) {
            console.log(`Form Submitted. Name: ${name}, Age: ${age}`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </label>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>

            <div>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                    />
                </label>
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </div>

            <Button value="Submit" />
        </form>
    );
}

export default EnhancedUserForm;
