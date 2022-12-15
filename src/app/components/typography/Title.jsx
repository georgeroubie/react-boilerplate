import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.xlarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.extraBold};
  margin: 0 0 ${({ theme: { spacing } }) => spacing.xlarge};
`;

const Title = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
