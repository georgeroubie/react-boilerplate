import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${({ theme: { spacing } }) => spacing.xlarge} auto;
  height: ${({ theme: { shapes } }) => shapes.divider};
  background-color: ${({ theme: { colors } }) => colors.dividerPrimary};
`;

const Divider = () => {
  return <Wrapper />;
};

export default Divider;
