import * as React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectProductLength } from '../../redux/productsSlice'
import ShoppingCartOrderContainer from '../../container/ShoppingCartOrderContainer'
import { shoppingCartImg } from '../../assets/imageUrl'
import { useActive } from '../../hooks/useActive'
import '../../styles/shopping-cart/shoppingCart.css'

const ShoppingCart: React.FC = () => {
  const productsTotal = useAppSelector(selectProductLength)
  const hidden = useActive(true)

  return (
    <div className='shopping-cart' >
      <img
        className='shopping-cart__icon'
        src={shoppingCartImg}
        alt="shoppingCartIcon"
        onClick={hidden.changeActive}
      />

      <span
        className='shopping-cart__products-total'
        onClick={hidden.changeActive}
      >
        {productsTotal}
      </span>

      <ShoppingCartOrderContainer
        isHidden={hidden.isActive}
        handleCloseButtonClick={hidden.changeActive}
      />
    </div>
  )
}

export default ShoppingCart
