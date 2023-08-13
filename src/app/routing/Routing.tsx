import Home from '@pages/home';
import { ReactElement, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RoutingLoader from './loader';

// Lazy load pages
const Info = lazy(() => import('../pages/info'));
const NotFound = lazy(() => import('./../pages/not-found'));

const Routing = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/info"
        element={
          <RoutingLoader>
            <Info />
          </RoutingLoader>
        }
      />
      <Route
        path="*"
        element={
          <RoutingLoader>
            <NotFound />
          </RoutingLoader>
        }
      />
    </Routes>
  );
};

export default Routing;
