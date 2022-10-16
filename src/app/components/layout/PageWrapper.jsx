import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  text-align: center;
  max-width: 800px;
  margin: ${({ theme: { spacing } }) => spacing.xlarge} auto;
  padding: 0 ${({ theme: { spacing } }) => spacing.large};
`;

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
