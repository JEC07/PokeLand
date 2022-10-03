import * as React from 'react'
import { linkedinImg } from '../../assets/imageUrl'
import '../../styles/links/linkedin.css'

const Linkedin: React.FC = () => {
  return (
    <address className='linkedin-address' >
      <a
        className='linkedin-link'
        href='https://www.linkedin.com/in/castill07/'
        target={'_blank'}
        rel="noreferrer"
      >
        <img
          className='linkedin-img'
          src={linkedinImg}
          alt="linkedin"
        />
      </a>
    </address>
  )
}

export default Linkedin
