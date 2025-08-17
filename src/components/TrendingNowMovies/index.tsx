import "src/components/TrendingNowMovies/index.scss"
import {PosterCard} from "src/components";

import "src/components/TrendingNowMovies/index.scss"

export const TrendingNowMovies = () => {
  return (
    <div className="trending_now">
      <div className="trending_now_title">Trending Now</div>
      <div className="trending_now_list">
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
        <PosterCard fileName={'https_specials-2.png'}/>
      </div>
    </div>
  )
}