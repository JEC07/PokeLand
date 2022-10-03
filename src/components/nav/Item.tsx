import * as React from 'react'
import { Search } from '../../typescript/types'
import NavItemLinksList from './NavItemLinksList'
import '../../styles/loading.css'

interface Props {
  itemId: string
  itemLinkList: Search[] | undefined
  isLoading: boolean
  isResponsive: boolean
  handleItemLinkClick: (itemLinkName?: string, itemId?: string) => void
}

const Item: React.FC<Props> = ({ itemId, itemLinkList, isLoading, isResponsive, handleItemLinkClick }: Props) => {
  if (isLoading || !itemLinkList) {
    return (
      <div className='loading'>Loading...</div>
    )
  }

  return (
    <NavItemLinksList
      itemId={itemId}
      itemLinksList={itemLinkList}
      isResponsive={isResponsive}
      handleItemLinkClick={handleItemLinkClick}
    />
  )
}

export default Item
