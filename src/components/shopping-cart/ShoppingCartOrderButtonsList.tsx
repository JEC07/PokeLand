import * as React from 'react'
import '../../styles/shopping-cart/shoppingCartOrderButtons.css'

interface Props {
  list: boolean[]
  handleButtonClick: (index: number) => void
}

const ShoppingCartOrderButtonsList: React.FC<Props> = ({ list, handleButtonClick }) => {
  return (
    <ul className='shopping-cart-order__buttons' >
      {
        list.map((value: boolean, index: number) =>
          <li
            key={index}
          >
            <button
              className="shopping-cart-order__button"
              type='button'
              disabled={value}
              onClick={() => handleButtonClick(index)}
            />
          </li>
        )
      }
    </ul>
  )
}

export default ShoppingCartOrderButtonsList
