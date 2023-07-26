import React from 'react';
import styles from './PageWrapper.module.scss';

type Props = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: Props): React.ReactElement => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PageWrapper;
