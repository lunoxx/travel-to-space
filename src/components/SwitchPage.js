import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';

import Layout from '../pages/Layout';

const SwitchPage = () => {
  return (
    <Routes>
      
      <Route exact path="/" element={<Layout />}>
        <Route exact index element={<Home />} />
        <Route exact path="destination" element={<Destination />} />
        <Route exact path="crew" element={<Crew />} />
        <Route exact path="technology" element={<Technology />} />
      </Route>

    </Routes>
  );
}

export default SwitchPage;