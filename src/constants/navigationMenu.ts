import homeIcon from 'src/assets/icons/Group 46.png';
import moviesIcon from 'src/assets/icons/Group 54.png';
import tvShowsIcon from 'src/assets/icons/Group 56.png';
import genresIcon from 'src/assets/icons/Group 53.png';
import watchLaterIcon from 'src/assets/icons/Group 47.png';

export const NAVIGATION_MENU_ITEMS = [
  {
    id: 1,
    linkText: 'Home',
    navigateTo: '/',
    icon: homeIcon
  },
  {
    id: 2,
    linkText: 'TV Shows',
    navigateTo: '/tv-shows',
    icon: tvShowsIcon
  },
  {
    id: 3,
    linkText: 'Movies',
    navigateTo: '/movies',
    icon: moviesIcon
  },
  {
    id: 4,
    linkText: 'Genres',
    navigateTo: '/genres',
    icon: genresIcon
  },
  {
    id: 5,
    linkText: 'Watch Later',
    navigateTo: '/watch-later',
    icon: watchLaterIcon
  },
]

export const NAVIGATION_MENU_FOOTER = [
  {id: 1, text: 'Languages'},
  {id: 2, text: 'Get Help'},
  {id: 3, text: 'Exit'},
]