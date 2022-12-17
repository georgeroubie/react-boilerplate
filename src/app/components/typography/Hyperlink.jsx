import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.a`
  text-decoration: underline;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
`;

const Hyperlink = ({ className, href, target, rel, children }) => {
  return (
    <Wrapper className={className} href={href} target={target} rel={rel}>
      {children}
    </Wrapper>
  );
};

Hyperlink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Hyperlink.defaultProps = {
  className: '',
  target: null,
  rel: 'noreferrer',
};

export default Hyperlink;
