import React from 'react';
import { useState } from 'react';


const Form = () => {
    const [email,setEmail ] = useState();
    const [password,setPassword] = useState()

    const handleForm = () => {
        console.log(
            `Email ${email} Password ${password}`
        )
    }

    return(
        <div>
            <form onSubmit={handleForm}>
                <label>
                    Email
                    <input type="text" onChange={setEmail} value={email} />
                </label>
                <label>
                    password
                    <input type="password" onChange={setPassword} value={password} />
                </label>
                <input type="submit" placeholder="Submit!"/>
            </form>
        </div>
    )
}

export default Form;