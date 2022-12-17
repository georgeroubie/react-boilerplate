import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
  margin: 0 0 ${({ theme: { spacing } }) => spacing.large};
`;

const Description = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Description.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Description;
