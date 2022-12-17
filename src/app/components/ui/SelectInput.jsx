import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`;

const Label = styled.label`
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  margin-right: ${({ theme: { spacing } }) => spacing.normal};
  white-space: nowrap;
`;

const Select = styled.select`
  background-color: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.textPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding: ${({ theme: { spacing } }) => spacing.normal};
  border-radius: ${({ theme: { shapes } }) => shapes.rounded};
  width: 100%;
  border: 0;

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
`;

const Option = styled.option``;

const SelectInput = ({ className, id, selectedValue, options, disabled, children, onChange }) => {
  function onChangeHandler({ target }) {
    onChange?.(target.value);
  }

  return (
    <Wrapper className={className}>
      <Label htmlFor={id}>{children}</Label>
      <Select name={id} id={id} value={selectedValue} onChange={onChangeHandler}>
        {options.map(({ value, label }, index) => (
          <Option key={`${value}_${index}`} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};

SelectInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};

SelectInput.defaultProps = {
  className: '',
  onChange: () => {},
};

export default SelectInput;
