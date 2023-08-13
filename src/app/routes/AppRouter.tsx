import Home from '@pages/home';
import { ReactElement, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutingLoader from './loader';
import AppRoutesWrapper from './wrapper';

// Lazy load pages
const Info = lazy(() => import('@pages/info'));
const NotFound = lazy(() => import('@pages/not-found'));

const Routing = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppRoutesWrapper />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
