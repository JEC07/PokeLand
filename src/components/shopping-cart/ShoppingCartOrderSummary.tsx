import * as React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { removeAllProducts } from '../../redux/productsSlice'
import '../../styles/shopping-cart/shoppingCartOrderSummary.css'

interface Props {
  balanceList: number[]
}

const ShoppingCartOrderSummary: React.FC<Props> = ({ balanceList }: Props) => {
  const dispatch = useAppDispatch()
  const totalToPay = balanceList.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)

  const handleCancelButtonClick = () => dispatch(removeAllProducts())

  return (
    <div className='shopping-cart-order-summary' >
      <span className='shopping-cart-order-summary__total' >${totalToPay}</span>

      <button
        className='shopping-cart-order-summary__buy-btn'
        type='button'
        disabled
      >
        Buy Now
      </button>

      <button
        className='shopping-cart-order-summary__cancel-btn'
        type='button'
        onClick={handleCancelButtonClick}
      >
        Cancel All
      </button>
    </div>
  )
}

export default ShoppingCartOrderSummary
