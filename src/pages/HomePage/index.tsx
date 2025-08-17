import {FeaturedMovie, TrendingNowMovies} from "src/components";

import "src/pages/HomePage/index.scss"

const HomePage = () => {
  return (
    <div className="homepage">
      <FeaturedMovie/>
      <TrendingNowMovies/>
    </div>
  )
}

export default HomePage