import React, { useState } from 'react'
import './Button.css';

const Button = () => {
    const [angka,setAngka] = useState(0);

    const handleTouch = () => {
        setAngka(angka + 1);
    }
    return (
        <div>
            <h3>Count {angka} </h3>
            <button id="btn" type="submit" onClick={handleTouch} />
        </div>
    )
}

export default Button;
