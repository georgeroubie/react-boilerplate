import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  text-align: center;
  max-width: 500px;
  margin: 50px auto;
  padding: 0 30px;
`;

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
