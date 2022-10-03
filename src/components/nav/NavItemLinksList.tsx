import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Search } from '../../typescript/types'
import '../../styles/nav/navItemLinks.css'

interface Props {
  itemId: string
  itemLinksList: Search[]
  isResponsive: boolean
  handleItemLinkClick: (itemLinkName?: string, itemId?: string) => void
}

const NavItemLinksList: React.FC<Props> = (Props) => {
  const handleItemLinkClick = (itemLinkName: string) => {
    if (Props.isResponsive) return Props.handleItemLinkClick()

    return Props.handleItemLinkClick(itemLinkName, Props.itemId)
  }

  return (
    <ul className='nav-ul' >
      {
        Props.itemLinksList.map((value: Search, index: number) =>
          <li
            key={index}
            className="nav-li"
          >
            <NavLink
              className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
              to={`${Props.itemId}/${value.name}`}
              onClick={() => handleItemLinkClick(value.name)}
            >
              {value.name}
            </NavLink>
          </li>
        )
      }
    </ul>
  )
}

export default NavItemLinksList
