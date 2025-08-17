import {useEffect, useState} from "react";

import Data from "src/assets/data/data.json";
import Storage from "src/helpers/storage.ts";
import {keysToCamel, normalizeAndSort} from "src/helpers";

const {Featured, TrendingNow} = Data

export const useSelectMovie = () => {
  const [featuredData, setFeaturedData] = useState({})
  const [trendingNow] = useState(normalizeAndSort(TrendingNow))
  const [selectedMovieId, setSelectedMovieId] = useState(Storage.get('movieId') || null)
  
  useEffect(() => {
    if (selectedMovieId) {
      const findSelectedMovie = trendingNow.find(movie => movie.id === selectedMovieId)
      setFeaturedData(findSelectedMovie)
    } else {
      setFeaturedData(keysToCamel(Featured))
    }
  }, [selectedMovieId])
  
  const singlePostClick = id => {
    setSelectedMovieId(id)
    Storage.set('movieId', id)
  }
  
  return {featuredData, trendingNow, singlePostClick}
}