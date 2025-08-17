import {LazyImage} from "src/components";
import {importAllImage} from "src/helpers";

import "src/components/PosterCard/index.scss"

const images = importAllImage()

export const PosterCard = ({id, fileName, alt, onClick}) => {
  const imgSrc = images[`/src/assets/images/${fileName}`] as string;
  
  if (!imgSrc) {
    console.warn(`Image not found: ${fileName}`);
    return null;
  }
  
  return (
    <div className="poster_card" onClick={() => onClick(id)}>
      <LazyImage src={imgSrc} alt={alt || fileName}/>
    </div>
  )
}