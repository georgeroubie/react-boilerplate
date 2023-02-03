import styled, { css } from 'styled-components';

const InputLabel = styled.label`
  position: absolute;
  pointer-events: none;
  transform: translate(0, 17px) scale(1);
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: ${({ theme: { colors } }) => colors.textSecondary};
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  left: 1rem;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BaseInput = styled.input`
  display: inline-block;
  padding: ${({ theme: { spacing } }) => `${spacing.small} ${spacing.large}`};
  padding-right: ${({ theme: { spacing } }) => spacing.large};
  width: 100%;
  flex: 1;
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  font-weight: ${({ hasLabel, theme: { fontWeight } }) => (hasLabel ? fontWeight.bold : fontWeight.normal)};
  line-height: 1.45;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  background-color: transparent;
  background-clip: padding-box;
  border: 0;
  text-overflow: ellipsis;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.textSecondary};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  align-items: center;
  position: relative;
  box-shadow: none;
  background-clip: padding-box;

  ${({ $state }) =>
    $state === 'default' &&
    css`
      background-color: ${({ theme: { colors } }) => colors.background};
    `};

  ${({ $state }) =>
    $state === 'success' &&
    css`
      background-color: ${({ theme: { colors } }) => colors.successSecondary};

      ${InputLabel} {
        color: ${({ theme: { colors } }) => colors.successPrimary};
      }

      ${BaseInput} {
        color: ${({ theme: { colors } }) => colors.successPrimary};
      }
    `};

  ${({ $state }) =>
    $state === 'error' &&
    css`
      background-color: ${({ theme: { colors } }) => colors.errorSecondary};

      ${InputLabel} {
        color: ${({ theme: { colors } }) => colors.errorPrimary};
      }

      ${BaseInput} {
        color: ${({ theme: { colors } }) => colors.errorPrimary};
      }
    `};

  ${({ $disabled }) =>
    $disabled &&
    css`
      border-color: ${({ theme: { colors } }) => colors.borderPrimary};
      background-color: ${({ theme: { colors } }) => colors.textDisabled} !important;

      input {
        background-image: none;
      }
    `}
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 55px;

  ${InputLabel} {
    width: 80%;
  }

  ${({ $label }) =>
    $label &&
    css`
      &:focus-within {
        ${BaseInput} {
          transform: translate(0, 4px);
          margin-bottom: 0.3rem !important;
          padding-bottom: 0 !important;
        }

        ${InputLabel} {
          transform: translate(0, 6px) scale(0.8);
          width: 100%;
        }
      }
    `}

  ${({ $value, $label }) =>
    $label &&
    $value &&
    css`
      ${BaseInput} {
        transform: translate(0, 4px);
        margin-bottom: 0.3rem !important;
        padding-bottom: 0 !important;
      }

      ${InputLabel} {
        transform: translate(0, 6px) scale(0.8);
        width: 100%;
      }
    `}
`;

const Input = ({
  className,
  id,
  value,
  state,
  label,
  disabled,
  name,
  inputMode,
  pattern,
  placeholder,
  required,
  autoComplete,
  readonly,
  type,
  onBlur,
  onChange,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onFocus,
  onClick,
  onPaste,
}) => {
  const inputType = type || 'text';
  const inputPlaceholder = !label ? placeholder : '';
  const inputValue = value || '';
  const inputState = state || 'default';

  return (
    <InputWrapper className={className} $state={inputState} $disabled={disabled}>
      <InputContainer $value={Boolean(inputValue)} $label={Boolean(label)}>
        <BaseInput
          id={id}
          hasLabel={Boolean(label)}
          value={inputValue}
          disabled={disabled}
          name={name}
          inputMode={inputMode}
          pattern={pattern}
          placeholder={inputPlaceholder}
          required={required}
          type={inputType}
          autoComplete={autoComplete}
          readOnly={readonly}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onPaste={onPaste}
          onClick={onClick}
        />
        {label && <InputLabel>{label}</InputLabel>}
      </InputContainer>
    </InputWrapper>
  );
};

export default Input;
