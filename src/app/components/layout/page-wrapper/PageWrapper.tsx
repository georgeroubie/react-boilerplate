import { ReactElement, ReactNode } from 'react';
import styles from './PageWrapper.module.scss';

type Props = {
  children: ReactNode;
};

const PageWrapper = ({ children }: Props): ReactElement => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PageWrapper;
