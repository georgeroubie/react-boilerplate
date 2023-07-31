import React from 'react';
import styles from './SelectInput.module.scss';

type Props = {
  className?: string;
  id: string;
  selectedValue: string;
  options: {
    value: string;
    label: string;
  }[];
  children: React.ReactNode;
  onChange: (value: string) => void;
};

const SelectInput = ({ className = '', id, selectedValue, options, children, onChange }: Props): React.ReactElement => {
  function onChangeHandler({ target }: React.ChangeEvent<HTMLSelectElement>) {
    onChange(target.value);
  }

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
      <select className={styles.select} name={id} id={id} value={selectedValue} onChange={onChangeHandler}>
        {options.map(({ value, label }, index) => (
          <option key={`${value}_${index}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
