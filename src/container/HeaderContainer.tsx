import * as React from 'react'
import SearchForm from '../components/header/SearchForm'
import Logo from '../components/header/Logo'
import NavContainer from './NavContainer'
import { useNavItems } from '../hooks/useNavItems'
import { navItemsIds } from '../components/nav/navItemsIds'
import ShoppingCart from '../components/shopping-cart/ShoppingCart'
import MenuForMobile from '../components/mobile/MenuForMobile'
import { Link } from 'react-router-dom'
import '../styles/container/headerContainer.css'

const HeaderContainer: React.FC = () => {
  const {
    itemsList,
    hiddenItemsList,
    changeActive,
    changeHidden,
    reset
  } = useNavItems(navItemsIds)

  return (
    <div
      className='header-container'
      id='header'
    >
      <header className='header' >
        <Logo handleLogoClick={reset} />
        <SearchForm />

        <Link
          className='login-link'
          to={'/login'}
        >
            Log In
        </Link>
      </header>

      <div className='navbar' >
        <NavContainer
          itemsList={itemsList}
          hiddenItemsList={hiddenItemsList}
          changeActive={changeActive}
          changeHidden={changeHidden}
        />

        <ShoppingCart />
        <MenuForMobile />
      </div>
    </div>
  )
}

export default HeaderContainer
