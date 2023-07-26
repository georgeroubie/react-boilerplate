/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Subtitle from '../../../components/typography/subtitle';
import SelectInput from '../../../components/ui/select-input';
import Button from '../../components/ui/Button';
import styles from './ButtonPresentation.module.scss';

const ButtonPresentation = (): React.ReactElement => {
  const [size, setSize] = useState('normal');
  const [variation, setVariation] = useState('primary');
  const [disabled, setDisabled] = useState('no');
  const [isLoading, setIsLoading] = useState('no');

  const sizeOptions = [
    {
      value: 'small',
      label: 'Small',
    },
    {
      value: 'normal',
      label: 'Normal',
    },
    {
      value: 'large',
      label: 'Large',
    },
  ];

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

  const variationOptions = [
    {
      value: 'primary',
      label: 'Primary',
    },
    {
      value: 'secondary',
      label: 'Secondary',
    },
  ];

  return (
    <>
      <Subtitle>Button component</Subtitle>
      <div className={styles.controls}>
        <SelectInput id="size" selectedValue={size} options={sizeOptions} onChange={setSize}>
          Size:
        </SelectInput>

        <SelectInput id="disabled" selectedValue={disabled} options={booleanOptions} onChange={setDisabled}>
          Disabled:
        </SelectInput>

        <SelectInput id="variation" selectedValue={variation} options={variationOptions} onChange={setVariation}>
          Variation:
        </SelectInput>

        <SelectInput id="loading" selectedValue={isLoading} options={booleanOptions} onChange={setIsLoading}>
          Loading:
        </SelectInput>
      </div>
      <Button size={size} variation={variation} disabled={disabled === 'yes'} isLoading={isLoading === 'yes'}>
        I am a button
      </Button>
    </>
  );
};

export default ButtonPresentation;
