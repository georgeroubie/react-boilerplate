import { ReactElement, ReactNode } from 'react';
import styles from './Title.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

const Title = ({ className = '', children }: Props): ReactElement => {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};

export default Title;
