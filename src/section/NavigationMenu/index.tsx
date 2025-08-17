import {useRef, useState} from "react";
import cn from "classnames";

import {NavLink, LazyImage} from "src/components";
import searchIcon from "src/assets/icons/ICON - Search.png"
import {NAVIGATION_MENU_FOOTER, NAVIGATION_MENU_ITEMS} from "src/constants/navigationMenu.ts";

import "src/section/NavigationMenu/index.scss"

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef(null);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };
  
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };
  
  return (
    <>
      <div
        className={cn('navigation_menu',
          {
            'navigation_menu_open': isOpen,
            'navigation_menu_close': !isOpen,
          })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="navigation_menu_user">
          <LazyImage
            needCache
            className="navigation_menu_user_image"
            alt='Gi-hun'
            src={'https://upload.wikimedia.org/wikipedia/en/c/c1/Seong_Gi-hun_season_1.png'}
          />
          <p className="navigation_menu_user_name">Daniel</p>
        </div>
        <div className="navigation_menu_search">
          <LazyImage className="navigation_menu_search_icon" src={searchIcon} alt='search' needCache/>
          <p>Search</p>
        </div>
        <div className="navigation_menu_list">
          {NAVIGATION_MENU_ITEMS.map(menuItem => (
            <NavLink
              key={menuItem.id}
              {...menuItem}
              isOpen={isOpen}
              className={{
                'navigation_menu_item_open': isOpen,
                'navigation_menu_item_close': !isOpen,
              }}/>
          ))}
        </div>
        <div className="navigation_menu_footer">
          {NAVIGATION_MENU_FOOTER.map(({id, text}) => (
            <div key={id} className="navigation_menu_footer_item">{text}</div>
          ))}
        </div>
      </div>
      {isOpen && <div className="navigation_menu_backdrop"/>}
    </>
  )
}