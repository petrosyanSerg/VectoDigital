import { useEffect, useRef, useState } from 'react';

export const useLazyImage = (options) => {
  const imgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      options
    );
    
    if (imgRef.current) observer.observe(imgRef.current);
    
    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, [options]);
  
  const handleImageLoad = () => setIsLoaded(true);
  
  return { isInView, imgRef, isLoaded, handleImageLoad };
};
