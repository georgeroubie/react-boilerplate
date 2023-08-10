import { ReactElement, ReactNode } from 'react';
import styles from './Subtitle.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

const Subtitle = ({ className = '', children }: Props): ReactElement => {
  return <h2 className={`${styles.subtitle} ${className}`}>{children}</h2>;
};

export default Subtitle;
