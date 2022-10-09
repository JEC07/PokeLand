import * as React from 'react'
import { gitGubImg } from '../../assets/imageUrl'
import '../../styles/links/gitHub.css'

const GitHub: React.FC = () => {
  return (
    <address className='github-address' >
      <a
        className='github-link'
        href='https://github.com/JEC07/PokeLand'
        target={'_blank'}
        rel="noreferrer"
      >
        <img
          className='github-img'
          src={gitGubImg}
          alt="github logo"
        />
      </a>
    </address>
  )
}

export default GitHub
