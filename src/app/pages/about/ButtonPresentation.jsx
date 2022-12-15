/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/typography/Subtitle';
import Button from '../../components/ui/Button';

const Controls = styled.div`
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const ButtonPresentation = () => {
  const [size, setSize] = useState('normal');
  const [variation, setVariation] = useState('primary');
  const [disabled, setDisabled] = useState('no');

  return (
    <>
      <Subtitle>{'<Button /> '}</Subtitle>
      <Controls>
        <label htmlFor="size">Size:</label>
        <select name="size" id="size" value={size} onChange={({ target }) => setSize(target.value)}>
          <option value="small">small</option>
          <option value="normal">normal</option>
          <option value="large">large</option>
        </select>

        <label htmlFor="size">Disabled:</label>
        <select name="disabled" id="disabled" value={disabled} onChange={({ target }) => setDisabled(target.value)}>
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>

        <label htmlFor="size">Variation:</label>
        <select name="variation" id="variation" value={variation} onChange={({ target }) => setVariation(target.value)}>
          <option value="primary">primary</option>
          <option value="secondary">secondary</option>
        </select>
      </Controls>
      <Button size={size} variation={variation} disabled={disabled === 'yes'}>
        Button text
      </Button>
    </>
  );
};

export default ButtonPresentation;
