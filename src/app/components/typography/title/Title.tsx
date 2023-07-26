import React from 'react';
import styles from './Title.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Title = ({ className, children }: Props) => {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};

export default Title;
