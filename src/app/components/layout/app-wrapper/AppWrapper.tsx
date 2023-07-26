import React, { useEffect, useState } from 'react';
import styles from './AppWrapper.module.scss';

type Props = {
  children: React.ReactNode;
};

function getHeight() {
  return `${window.innerHeight}px`;
}

const AppWrapper = ({ children }: Props): React.ReactElement => {
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    function changeHeightValue() {
      const currentHeight = getHeight();
      if (height !== currentHeight) {
        setHeight(currentHeight);
      }
    }

    window.addEventListener('resize', changeHeightValue);
    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
  }, [height]);

  return (
    <div className={styles.wrapper} style={{ height }}>
      {children}
    </div>
  );
};

export default AppWrapper;
