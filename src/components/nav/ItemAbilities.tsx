import * as React from 'react'
import { useGetPokemonsAbilitiesQuery } from '../../services/pokemonServiceRedux'
import Item from './Item'

interface Props {
  itemId: string
  isResponsive: boolean
  handleItemLinkClick: (itemLinkName?: string, itemId?: string) => void
}

const ItemAbilities: React.FC<Props> = ({ itemId, isResponsive, handleItemLinkClick }: Props) => {
  const { data, isLoading } = useGetPokemonsAbilitiesQuery()

  return (
    <Item
      itemId={itemId}
      itemLinkList={data?.results}
      isLoading={isLoading}
      isResponsive={isResponsive}
      handleItemLinkClick={handleItemLinkClick}
    />
  )
}

export default ItemAbilities
