import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './UserReducer';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            <p>Don't have an account? <Link to="/register" >Sign Up</Link>  </p>
        </form>
    );
}

export default Login;

