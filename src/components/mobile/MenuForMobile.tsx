import * as React from 'react'
import ItemAbilities from '../nav/ItemAbilities'
import { navItemsIds } from '../nav/navItemsIds'
import ItemTypes from '../nav/ItemTypes'
import { menuForMobileImg } from '../../assets/imageUrl'
import { useActive } from '../../hooks/useActive'
import '../../styles/mobile/menuForMobile.css'

const MenuForMobile: React.FC = () => {
  const hidden = useActive(true)

  return (
    <div className='menu-for-mobile' >
      <img
        className='menu-for-mobile-icon'
        src={menuForMobileImg}
        alt="menu-for-mobile-icon"
        onClick={hidden.changeActive}
      />

      <nav
        className='menu-for-mobile-nav'
        hidden={hidden.isActive}
      >
        <button
          className='menu-for-mobile-nav__close-btn'
          type='button'
          onClick={hidden.changeActive}
        >
          X
        </button>

        <div className='menu-for-mobile-nav__item' >
          <span className='menu-for-mobile-nav__item-title' >Types</span>

          <ItemTypes
            itemId={navItemsIds[0]!}
            isResponsive={true}
            handleItemLinkClick={hidden.changeActive}
          />
        </div>

        <div className='menu-for-mobile-nav__item' >
          <span className='menu-for-mobile-nav__item-title' >Abilities</span>

          <ItemAbilities
            itemId={navItemsIds[1]!}
            isResponsive={true}
            handleItemLinkClick={hidden.changeActive}
          />
        </div>
      </nav>
    </div>
  )
}

export default MenuForMobile
