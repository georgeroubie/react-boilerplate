import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routing = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default Routing;
