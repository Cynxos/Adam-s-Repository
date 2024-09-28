import React, { useState } from 'react';

const Phone = () => {
    const [phone, setPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    });

    const changeColor = () => {
        setPhone(prevState => ({
            ...prevState,
            color: "blue"
        }));
    };

    return (
        <div>
            <h1>My Phone</h1>
            <p>Brand: {phone.brand}</p>
            <p>Model: {phone.model}</p>
            <p>Color: {phone.color}</p>
            <p>Year: {phone.year}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default Phone;