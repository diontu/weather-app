import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './dashboard/dashboard';
import { CITIES } from './common/constants';

const MainRoutes = (): JSX.Element => (
  <Routes>
    <Route
        path="/"
        element={<Navigate to="/toronto" replace />}
    />
    <Route path="/toronto" element={<Dashboard city={CITIES.toronto}/>} />
    <Route path="/ottawa" element={<Dashboard city={CITIES.ottawa}/>} />
    <Route path="/vancouver" element={<Dashboard city={CITIES.vancouver}/>} />
  </Routes>
);

export default MainRoutes;