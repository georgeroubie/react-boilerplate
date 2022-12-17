import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icons from '../icons/Icons';

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'default')};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing.small};
  border-radius: ${({ theme: { spacing } }) => spacing.xsmall};
  width: ${({ theme: { fontSize } }) => fontSize.large};
  height: ${({ theme: { fontSize } }) => fontSize.large};

  & + span {
    margin-left: ${({ theme: { spacing } }) => spacing.normal};
  }
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked + div {
    color: ${({ theme: { colors } }) => colors.surface};
    background-color: ${({ theme: { colors } }) => colors.successPrimary};
  }

  &:not(:checked) + div {
    color: ${({ theme: { colors } }) => colors.textSecondary};
    background-color: ${({ theme: { colors } }) => colors.background};
  }

  &:disabled {
    pointer-events: none;
  }
`;

const Label = styled.span`
  margin-left: ${({ theme: { spacing } }) => spacing.normal};
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
`;

const Checkbox = ({ className, checked, label, disabled, onChange }) => {
  function onChangeHandler(e) {
    onChange?.(e.target.checked, e);
  }

  return (
    <Wrapper>
      <LabelContainer className={className} $disabled={disabled}>
        <Input disabled={disabled} checked={checked} onChange={onChangeHandler} />
        <Icon>{checked ? <Icons type="Check" /> : <Icons type="Plus" />}</Icon>
        <Label>{label}</Label>
      </LabelContainer>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  className: '',
  disabled: false,
  onChange: () => {},
};

export default Checkbox;
