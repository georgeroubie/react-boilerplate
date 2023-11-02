import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function getHeight() {
  return `${window.innerHeight}px`;
}

function useBodyHeight() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
