import * as React from 'react'
import { isActive } from '../../tools/array'
import { IsActive } from '../../typescript/types'
import '../../styles/nav/navItem.css'

interface Props {
  itemId: string
  itemsList: IsActive<string>[]
  hiddenItemsList: IsActive<string>[]
  handleItemClick: (itemId: string) => void
  children: React.ReactNode
}

const NavItem: React.FC<Props> = (Props) => {
  const handleItemClick = () => Props.handleItemClick(Props.itemId)

  const isHiddenItemLinks: boolean = isActive<string>(Props.hiddenItemsList, Props.itemId)
  const isActiveItem: boolean = isActive<string>(Props.itemsList, Props.itemId)

  const condition = () => {
    const isHiddenAll: boolean = Props.hiddenItemsList.every((value: IsActive<string>) => value.isActive)

    if ((isHiddenAll && isActiveItem) || !isHiddenItemLinks) return 'nav-title nav-title--active'

    return 'nav-title'
  }

  return (
    <div className='nav-item' >
      <span
        className={condition()}
        onClick={handleItemClick}
      >
        { Props.itemId }
      </span>

      <div
        className='nav-links'
        hidden={isHiddenItemLinks}
      >
        { Props.children }
      </div>
    </div>
  )
}

export default NavItem
