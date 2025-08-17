import cn from "classnames";
import {Link} from "react-router-dom";

import {LazyImage} from "src/components";

import 'src/components/NavLink/index.scss'

export const NavLink = ({icon, linkText, navigateTo, className, isOpen}) => {
  return (
    <Link className={cn('nav_link', className)} to={navigateTo}>
      <LazyImage src={icon} needCache/>
      <p>{isOpen && linkText}</p>
    </Link>
  )
}
