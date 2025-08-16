import {useEffect, useState} from 'react';
import cn from 'classnames';

import {useLazyImage} from 'src/hooks';

import "src/components/LazyImage/index.scss";

const imageCache = new Map();

export const LazyImage = ({src, alt, className, needCache = false}) => {
  const [isCached, setIsCached] = useState(imageCache.has(src));
  const {isInView, imgRef, isLoaded, handleImageLoad} = useLazyImage({threshold: 0.1});
  
  useEffect(() => {
    if (needCache && src && !imageCache.has(src)) {
      const img = new Image();
      
      img.src = src;
      
      img.onload = () => {
        imageCache.set(src, true);
        setIsCached(true);
      };
      
      img.onerror = () => {
        imageCache.set(src, false);
      };
    }
  }, [needCache, src]);
  
  return (
    <img
      alt={alt}
      ref={imgRef}
      src={isCached || isInView ? src : undefined}
      onLoad={(e) => !isCached && handleImageLoad(e)}
      className={cn(className, {
        'image_fade_in': !isCached && isLoaded,
        'image_fade_out': !isCached && !isLoaded,
      })}
    />
  );
};;