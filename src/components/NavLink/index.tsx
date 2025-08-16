import cn from "classnames";
import {Link} from "react-router-dom";
import LazyImage from "src/components/LazyImage";

export const NavLink = ({icon, linkText, navigateTo, className}) => {
  return (
    <div className={cn('nav_link', className)}>
      <LazyImage />
      <Link to={navigateTo}>{linkText}</Link>
    </div>
  )
}
