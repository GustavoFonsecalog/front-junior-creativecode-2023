import React from 'react';

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Private from '../pages/Private'
import { RequireAuth } from '../Auth/RequireAuth';
import { Login } from '../pages/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default AppRoutes;
