import * as React from 'react'
import { Link } from 'react-router-dom'
import { logoImg } from '../../assets/imageUrl'
import '../../styles/header/logo.css'

interface Props {
  handleLogoClick: () => void
}

const Logo: React.FC<Props> = ({ handleLogoClick }: Props) => {
  return (
    <Link
      className='logo-link'
      to={'/'}
    >
      <img
        className="logo-img"
        src={logoImg}
        alt="logo"
        onClick={handleLogoClick}
      />
    </Link>
  )
}

export default Logo
