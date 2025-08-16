import {LazyImage} from "src/components";
import {formatSecondsToTime} from "src/helpers";
import homepageImage from "src/assets/images/FeaturedCoverImage.png";
import homepageTitleImage from "src/assets/images/FeaturedTitleImage.png";
import Data from 'src/assets/data/data.json';

import "src/components/FeaturedMovie/index.scss"

const {Featured} = Data

export const FeaturedMovie = () => {
  const {
    Title: title,
    ReleaseYear: releaseYear,
    MpaRating: mpaRating,
    Category: category,
    Duration: duration,
    Description: description,
  } = Featured || {}
  
  return (
    <div className="featured_movie">
      <div className="featured_movie_category_image">
        <p className="featured_movie_category">{category}</p>
        <LazyImage needCache src={homepageTitleImage} alt={title}/>
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