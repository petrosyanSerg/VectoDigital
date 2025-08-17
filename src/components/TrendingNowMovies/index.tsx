import "src/components/TrendingNowMovies/index.scss"
import {PosterCard} from "src/components";

import "src/components/TrendingNowMovies/index.scss"

export const TrendingNowMovies = ({movieList, singlePostClick}) => {
  return (
    <div className="trending_now">
      <div className="trending_now_title">Trending Now</div>
      <div className="trending_now_list">
        {movieList.map(({coverImage, id}) => (
          <PosterCard
            id={id}
            key={id}
            fileName={coverImage}
            onClick={singlePostClick}
          />
        ))}
      </div>
    </div>
  )
}