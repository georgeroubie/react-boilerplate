import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `};
`;

function getHeight() {
  return `${window.innerHeight}px`;
}

const AppWrapper = ({ children }) => {
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    function changeHeightValue() {
      if (getHeight() !== height) {
        setHeight(getHeight());
      }
    }

    window.addEventListener('resize', changeHeightValue);
    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
  }, [height]);

  return <Wrapper $height={height}>{children}</Wrapper>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
