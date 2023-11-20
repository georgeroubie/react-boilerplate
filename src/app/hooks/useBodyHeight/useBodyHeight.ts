import { useEffect } from 'react';

function getHeight() {
  return `${window.innerHeight}px`;
}

function useBodyHeight() {
  useEffect(() => {
    function changeHeightValue() {
      document.body.style.height = getHeight();
    }

    changeHeightValue();

    window.addEventListener('resize', changeHeightValue);
    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
  }, []);
}

export default useBodyHeight;
