import {LazyImage} from "src/components";

import "src/components/PosterCard/index.scss"

const images = import.meta.glob("/src/assets/images/*", {eager: true, import: "default"});
export const PosterCard = ({fileName, alt}) => {
  const imgSrc = images[`/src/assets/images/${fileName}`] as string;
  
  if (!imgSrc) {
    console.warn(`Image not found: ${fileName}`);
    return null;
  }
  
  return (
    <div className="poster_card">
      <LazyImage src={imgSrc} alt={alt || fileName}/>
    </div>
  )
}