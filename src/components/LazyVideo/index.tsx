import {useIntersectionObserver} from "src/hooks/useIntersectionObserver.ts";

import "src/components/LazyVideo/index.scss"

export const LazyVideo = ({className, src, poster}) => {
  const {ref, isVisible} = useIntersectionObserver({
    threshold: 0.25,
  });
  
  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
    >
      {isVisible && <source src={src} type="video/mp4"/>}
    </video>
  );
}