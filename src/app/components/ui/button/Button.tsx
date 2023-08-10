import SpinnerIcon from '@components/icons/Spinner';
import { MouseEvent, ReactElement, ReactNode } from 'react';
import styles from './Button.module.scss';
import { ButtonSize, ButtonType, ButtonVariation } from './constants';

type Props = {
  className?: string;
  type?: ButtonType;
  variation?: ButtonVariation;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  children: ReactNode;
  onClick?: (ev?: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
  className = '',
  type = ButtonType.Button,
  variation,
  disabled = false,
  size,
  isLoading = false,
  children,
  onClick,
}: Props): ReactElement => {
  const sizeClassName = size && styles[size] ? styles[size] : '';
  const variationClassName = variation && styles[variation] ? styles[variation] : '';
  const computedClassName = `${styles.button} ${sizeClassName} ${variationClassName} ${className}`.trim();

  return (
    <button className={computedClassName} type={type} disabled={disabled} onClick={onClick}>
      {isLoading ? <SpinnerIcon className={styles.spinner} /> : <span className={styles.label}>{children}</span>}
    </button>
  );
};

export default Button;
