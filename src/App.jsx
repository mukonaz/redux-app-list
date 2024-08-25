import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Register from './Registration';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
                <Route path="/edit/:id" element={<PrivateRoute><Update /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
