import React from 'react';
import styles from './Description.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Description = ({ className, children }: Props): React.ReactElement => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};

export default Description;
