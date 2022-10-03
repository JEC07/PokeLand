import * as React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderContainer from '../container/HeaderContainer'
import LinksContainer from '../container/LinksContainer'

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <Outlet />
      <LinksContainer />
    </>
  )
}

export default HomePage
