import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Description from '../components/typography/Description';

const RoutingLoader = ({ children }) => {
  return <Suspense fallback={<Description>Loading...</Description>}>{children}</Suspense>;
};

RoutingLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoutingLoader;
