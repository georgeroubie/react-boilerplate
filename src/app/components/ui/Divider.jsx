import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${({ theme: { spacing } }) => spacing.xlarge} auto;
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
`;

const Divider = () => {
  return <Wrapper />;
};

export default Divider;
