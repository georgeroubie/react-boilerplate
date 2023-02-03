/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/typography/Subtitle';
import Input from '../../components/ui/Input';
import SelectInput from '../../components/ui/SelectInput';

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme: { spacing } }) => spacing.large};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const InputPresentation = () => {
  const [state, setState] = useState('default');
  const [disabled, setDisabled] = useState('no');
  const [value, setValue] = useState('');

  const booleanOptions = [
    {
      value: 'no',
      label: 'No',
    },
    {
      value: 'yes',
      label: 'Yes',
    },
  ];

  const stateOptions = [
    {
      value: 'default',
      label: 'Default',
    },
    {
      value: 'success',
      label: 'Success',
    },
    {
      value: 'error',
      label: 'Error',
    },
  ];

  return (
    <>
      <Subtitle>Input component</Subtitle>
      <Controls>
        <SelectInput id="disabled" selectedValue={disabled} options={booleanOptions} onChange={setDisabled}>
          Disabled:
        </SelectInput>
        <SelectInput id="state" selectedValue={state} options={stateOptions} onChange={setState}>
          State:
        </SelectInput>
      </Controls>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Input with label"
        state={state}
        disabled={disabled === 'yes'}
      />
    </>
  );
};

export default InputPresentation;
