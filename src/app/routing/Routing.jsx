import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';

const Routing = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export default Routing;
