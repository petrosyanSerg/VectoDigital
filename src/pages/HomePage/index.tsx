import {useSelectMovie} from "src/hooks";
import {FeaturedMovie, TrendingNowMovies} from "src/components";

import "src/pages/HomePage/index.scss"

const HomePage = () => {
  const {featuredData, trendingNow, singlePostClick} = useSelectMovie()
  
  return (
    <div className="homepage">
      <FeaturedMovie selectedMovie={featuredData}/>
      <TrendingNowMovies
        movieList={trendingNow}
        singlePostClick={singlePostClick}
      />
    </div>
  )
}

export default HomePage