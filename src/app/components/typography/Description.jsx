import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  margin: 0 0 ${({ theme: { spacing } }) => spacing.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
`;

const Description = ({ children }) => <Wrapper>{children}</Wrapper>;

Description.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Description;
