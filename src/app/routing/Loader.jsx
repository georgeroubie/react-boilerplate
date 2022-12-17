import PropTypes from 'prop-types';
import { Suspense } from 'react';
import styled from 'styled-components';
import _Icons from '../components/icons/Icons';
import { setAnimation } from '../theme/styles/helpers';

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 90px);
`;

const Icons = styled(_Icons)`
  width: ${({ theme: { fontSize } }) => fontSize.large};
  ${setAnimation('spin infinite 2s linear')};
`;

const RoutingLoader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Wrapper>
          <Icons type="Spinner" />
        </Wrapper>
      }
    >
      {children}
    </Suspense>
  );
};

RoutingLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoutingLoader;
