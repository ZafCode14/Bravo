import { useState, useEffect } from "react";

const useWindowHeight = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollPixels, setScrollPixels] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollY / scrollableHeight) * 100;

      setScrollPixels(scrollY);
      setScrollPercentage(percentage);
    };
    
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollPixels);

  return({ scrollPixels, scrollPercentage })
};

export default useWindowHeight;