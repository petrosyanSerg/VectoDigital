import {Outlet} from 'react-router-dom';

import {NavigationMenu} from 'src/section'

import "src/assets/scss/index.scss"
import 'src/assets/scss/layout.scss'

const Layout = () => {
  return (
    <main className="main_layout">
      <NavigationMenu/>
      <div className="main_layout_all_content">
        <Outlet/>
      </div>
    </main>
  )
}

export default Layout