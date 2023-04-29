import React from 'react';

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/home'
import Private from '../pages/Private/private'
import { RequireAuth } from '../Auth/RequireAuth';
import { Login } from '../pages/Login/login';

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
