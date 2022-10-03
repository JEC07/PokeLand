import * as React from 'react'
import { useGetPokemonsTypesQuery } from '../../services/pokemonServiceRedux'
import Item from './Item'

interface Props {
  itemId: string
  isResponsive: boolean
  handleItemLinkClick: (itemLinkName?: string, itemId?: string) => void
}

const ItemTypes: React.FC<Props> = ({ itemId, isResponsive, handleItemLinkClick }: Props) => {
  const { data, isLoading } = useGetPokemonsTypesQuery()

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

export default ItemTypes
