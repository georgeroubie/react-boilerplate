import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
  margin: 0 0 ${({ theme: { spacing } }) => spacing.large};
`;

const Title = ({ children }) => <Wrapper>{children}</Wrapper>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
