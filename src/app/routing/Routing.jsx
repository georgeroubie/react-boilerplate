import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

// Lazy load components
const About = lazy(() => import('../pages/About'));
const Settings = lazy(() => import('../pages/Settings'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loader = ({ children }) => <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/about"
      element={
        <Loader>
          <About />
        </Loader>
      }
    />
    <Route
      path="/settings"
      element={
        <Loader>
          <Settings />
        </Loader>
      }
    />
    <Route
      path="*"
      element={
        <Loader>
          <NotFound />
        </Loader>
      }
    />
  </Routes>
);

export default Routing;
