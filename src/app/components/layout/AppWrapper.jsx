import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 990px;
  height: 100vh;
  overflow: hidden auto;
  margin: 0 auto;
  padding: 0 ${({ theme: { spacing } }) => spacing.large};
  background-color: ${({ theme: { colors } }) => colors.surface};
`;

function getHeight() {
  return `${window.innerHeight}px`;
}

const AppWrapper = ({ children }) => {
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    function changeHeightValue() {
      const currentHeight = getHeight();
      if (height !== currentHeight) {
        setHeight(currentHeight);
      }
    }

    window.addEventListener('resize', changeHeightValue);
    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
  }, [height]);

  return <Wrapper style={{ height }}>{children}</Wrapper>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
