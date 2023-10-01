import { useEffect, useState } from 'react';

function getCurrentWidth() {
  return window.innerWidth;
}

function useWindowWidth() {
  const [width, setWidth] = useState(getCurrentWidth());

  useEffect(() => {
    function changeWidthValue() {
      const currentWidth = getCurrentWidth();

      if (width !== currentWidth) {
        setWidth(getCurrentWidth());
      }
    }

    window.addEventListener('resize', changeWidthValue);

    return () => {
      window.removeEventListener('resize', changeWidthValue);
    };
  }, [width]);

  return width;
}

export default useWindowWidth;
