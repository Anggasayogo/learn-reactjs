import React, { useState } from 'react'
import './Button.css';

const Button = () => {
    const [angka,setAngka] = useState(0);

    const handleTambah = () => {
        setAngka(angka + 1);
    }

    const handleKurang = () =>{
        setAngka(angka - 1)
    }
    return (
        <div>
            <h3>Count {angka} </h3>
            <button id="btn" type="submit" onClick={handleTambah}>
                Tambah Data
            </button>
            <button id="btn" type="submit" onClick={handleKurang}>
                Kurang Data
            </button>
        </div>
    )
}

export default Button;
