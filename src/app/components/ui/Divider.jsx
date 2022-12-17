import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${({ theme: { spacing } }) => spacing.xlarge} auto;
  height: 2px;
  background-color: ${({ theme: { colors } }) => colors.dividerPrimary};
`;

const Divider = () => {
  return <Wrapper />;
};

export default Divider;
