import {LazyImage} from "src/components";
import {formatSecondsToTime, importAllImage} from "src/helpers";
import homepageImage from "src/assets/images/FeaturedCoverImage.png";

import "src/components/FeaturedMovie/index.scss"

const images = importAllImage()

export const FeaturedMovie = ({selectedMovie}) => {
  const {
    title,
    category,
    duration,
    videoUrl,
    mpaRating,
    titleImage,
    releaseYear,
    description,
  } = selectedMovie || {}
  
  const imgSrc = images[`/src/assets/images/${titleImage}`];
  
  if (!imgSrc) {
    console.warn(`Image not found: ${titleImage}`);
  }
  
  return (
    <div className="featured_movie">
      <div className="featured_movie_category_image">
        <p className="featured_movie_category">{category}</p>
        <LazyImage needCache src={imgSrc} alt={title}/>
      </div>
      <div className="featured_movie_info">
        <p className="featured_movie_info_item">{releaseYear}</p>
        <p className="featured_movie_info_item">{mpaRating}</p>
        <p className="featured_movie_info_item">{duration && formatSecondsToTime(duration)}</p>
      </div>
      <p className="featured_movie_desciption">{description}</p>
      <div className="featured_movie_buttons">
        <div className="featured_movie_buttons_button">Play</div>
        <div className="featured_movie_buttons_button">More Info</div>
      </div>
      <LazyImage src={homepageImage} className="featured_movie_image" needCache alt="img"/>
    </div>
  )
}