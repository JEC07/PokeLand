import * as React from 'react'
import { PokemonWithPrice } from '../typescript/types'
import { useAppSelector } from '../app/hooks'
import { selectAllProducts } from '../redux/productsSlice'
import { useShoppingCartOrder } from '../hooks/useShoppingCartOrder'
import ShoppingCartOrderSummary from '../components/shopping-cart/ShoppingCartOrderSummary'
import ShoppingCartOrderProductsList from '../components/shopping-cart/ShoppingCartOrderProductsList'
import ShoppingCartOrderButtonsList from '../components/shopping-cart/ShoppingCartOrderButtonsList'
import '../styles/container/shoppingCartOrderContainer.css'

interface Props {
  isHidden: boolean
  handleCloseButtonClick: () => void
}

const ShoppingCartOrderContainer: React.FC<Props> = ({ isHidden, handleCloseButtonClick }: Props) => {
  const pokemonsList = useAppSelector(selectAllProducts)

  const {
    cardsNumber,
    handleCardNumberChange,
    pokemons,
    paginationList,
    changePagination
  } = useShoppingCartOrder(pokemonsList, 2)

  const balanceList = pokemonsList.map((value: PokemonWithPrice) => (value.price * value.amount))

  return (
    <div
      className='shopping-cart-order-container'
      hidden={isHidden}
    >
      <button
        className="shopping-cart-order__close-btn"
        type='button'
        onClick={handleCloseButtonClick}
      >
        X
      </button>

      <span className='shopping-cart-order__title' >Your Cart</span>

      <input
        className='shopping-cart-order__filter'
        type="number"
        value={cardsNumber}
        onChange={(e) => handleCardNumberChange(e)}
      />

      <ShoppingCartOrderProductsList pokemonsList={pokemons} />
      <ShoppingCartOrderButtonsList list={paginationList} handleButtonClick={changePagination} />
      <ShoppingCartOrderSummary balanceList={balanceList} />
    </div>
  )
}

export default ShoppingCartOrderContainer
