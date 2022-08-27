import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Description from '../components/typography/Description';
import Home from '../pages/home';

// Lazy load components
const About = lazy(() => import('../pages/about'));
const Settings = lazy(() => import('../pages/settings'));
const NotFound = lazy(() => import('../pages/not-found'));

const Loader = ({ children }) => <Suspense fallback={<Description>Loading...</Description>}>{children}</Suspense>;

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
