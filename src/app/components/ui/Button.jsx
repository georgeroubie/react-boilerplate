import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setAnimation, setTransition } from '../../theme/styles/helpers';
import { darken } from '../../utilities/colors';
import _Icons from '../icons/Icons';

const Icons = styled(_Icons)`
  width: ${({ theme: { fontSize } }) => fontSize.large};
`;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding: ${({ theme: { spacing } }) => spacing.normal};
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  width: 100%;
  min-width: 0;
  border: 0;
  user-select: none;
  color: ${({ theme: { colors } }) => colors.buttonPrimaryText};
  background-color: ${({ theme: { colors } }) => colors.buttonPrimary};
  ${setTransition('color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out')}

  &:hover {
    text-decoration: none;
    background-color: ${({ theme: { colors } }) => darken(colors.buttonPrimary, 10)};
  }

  &:focus,
  &:active {
    outline: 0;
    box-shadow: ${({ theme: { spacing, colors } }) => `0 0 0 ${spacing.xsmall} ${colors.outline}`};
    text-decoration: none;
  }

  &.disabled,
  &:disabled {
    opacity: 0.65;
    box-shadow: none;
    text-decoration: none;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  ${({ $size }) =>
    $size === 'small' &&
    css`
      padding: ${({ theme: { spacing } }) => spacing.small};
    `}

  ${({ $size }) =>
    $size === 'large' &&
    css`
      padding: ${({ theme: { spacing } }) => spacing.large};
    `}

  ${({ $variation }) =>
    $variation === 'secondary' &&
    css`
      color: ${({ theme: { colors } }) => colors.buttonSecondaryText};
      background-color: ${({ theme: { colors } }) => colors.buttonSecondary};

      &:hover {
        background-color: ${({ theme: { colors } }) => darken(colors.buttonSecondary, 10)};
      }
    `}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      ${Icons} {
        ${setAnimation('spin infinite 2s linear')};
      }
    `}
`;

const Label = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Button = ({ className, type, variation, disabled, size, isLoading, children, onClick }) => {
  return (
    <Wrapper
      className={className}
      type={type}
      $variation={variation}
      $isLoading={isLoading}
      $size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Icons type="Spinner" /> : <Label>{children}</Label>}
    </Wrapper>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  variation: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  variation: 'primary',
  size: 'normal',
  disabled: false,
  isLoading: false,
  onClick: null,
};

export default Button;
