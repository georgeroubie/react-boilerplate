import React, { Suspense } from 'react';
import SpinnerIcon from '../../components/icons/Spinner';
import styles from './Loader.module.scss';

type Props = {
  children: React.ReactNode;
};

const RoutingLoader = ({ children }: Props): React.ReactElement => {
  return (
    <Suspense
      fallback={
        <div className={styles.wrapper}>
          <SpinnerIcon />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default RoutingLoader;
