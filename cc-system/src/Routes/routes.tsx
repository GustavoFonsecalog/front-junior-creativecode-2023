import React from 'react';

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Private from '../pages/Private'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/private" element={<Private />} />
        </Routes>
    );
};

export default AppRoutes;
