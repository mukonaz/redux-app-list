import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from './UserReducer';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ email, password }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
