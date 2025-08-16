import {Outlet} from 'react-router-dom';

import {NavigationMenu} from 'src/section'

const Layout = () => {
  return (
    <>
      <NavigationMenu/>
      <Outlet/>
    </>
  )
}

export default Layout