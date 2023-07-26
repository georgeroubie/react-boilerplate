import React from 'react';
import styles from './Subtitle.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Subtitle = ({ className = '', children }: Props): React.ReactElement => {
  return <h2 className={`${styles.subtitle} ${className}`}>{children}</h2>;
};

export default Subtitle;
