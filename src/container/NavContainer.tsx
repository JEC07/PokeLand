import * as React from 'react'
import { IsActive } from '../typescript/types'
import NavItem from '../components/nav/NavItem'
import { navItemsIds } from '../components/nav/navItemsIds'
import ItemAbilities from '../components/nav/ItemAbilities'
import ItemTypes from '../components/nav/ItemTypes'
import '../styles/container/navContainer.css'

interface Props {
  itemsList: IsActive<string>[]
  hiddenItemsList: IsActive<string>[]
  changeActive: (itemId: string) => void
  changeHidden: (itemId: string) => void
}

const NavContainer: React.FC<Props> = ({ itemsList, hiddenItemsList, changeActive, changeHidden }) => {
  const [selectedItemLinkName, setSelectedItemLinkName] = React.useState<string>('')

  React.useEffect(() => {
    const notActive: boolean = itemsList.every((value: IsActive<string>) => !value.isActive)

    if (notActive) setSelectedItemLinkName('')
  }, [itemsList])

  const handleItemClick = (itemId: string) => changeHidden(itemId)

  const handleItemLinkClick = (itemLinkName?: string, itemId?: string) => {
    setSelectedItemLinkName(itemLinkName!)
    changeActive(itemId!)
    changeHidden(itemId!)
  }

  return (
    <nav className='nav-container' >
      <div className='nav-container__items'>
        <NavItem
          itemId={navItemsIds[0]!}
          itemsList={itemsList}
          hiddenItemsList={hiddenItemsList}
          handleItemClick={handleItemClick}
        >
          <ItemTypes
            itemId={navItemsIds[0]!}
            isResponsive={false}
            handleItemLinkClick={handleItemLinkClick}
          />
        </NavItem>

        <NavItem
          itemId={navItemsIds[1]!}
          itemsList={itemsList}
          hiddenItemsList={hiddenItemsList}
          handleItemClick={handleItemClick}
        >
          <ItemAbilities
            itemId={navItemsIds[1]!}
            isResponsive={false}
            handleItemLinkClick={handleItemLinkClick}
          />
        </NavItem>
      </div>

      <div className='nav-container__item' >
        <span className='nav-container__item--selected'>
          {selectedItemLinkName}
        </span>
      </div>
    </nav>
  )
}

export default NavContainer
