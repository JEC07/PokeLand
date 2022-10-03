import * as React from 'react'
import { PokemonWithPrice } from '../../typescript/types'
import ShoppingCartOrderProduct from './ShoppingCartOrderProduct'
import '../../styles/shopping-cart/shoppingCartOrderProductsList.css'

interface Props {
  pokemonsList: PokemonWithPrice[]
}

const ShoppingCartOrderProductsList: React.FC<Props> = ({ pokemonsList }: Props) => {
  return (
    <ul className='shopping-cart-order__products'>
      {
        pokemonsList.map((value: PokemonWithPrice) =>
          <ShoppingCartOrderProduct
            key={value.id}
            pokemonWithPrice={value}
          />
        )
      }
    </ul>
  )
}

export default ShoppingCartOrderProductsList
