import * as React from 'react'
import Linkedin from '../components/links/Linkedin'
import { useScrollEvent } from '../hooks/useScrollEvent'
import '../styles/container/linksContainer.css'

const LinksContainer: React.FC = () => {
  const isHiddenScroll = useScrollEvent(100)

  return (
    <div className='links-container' >
      <Linkedin />

      <a
        className='pointer-link'
        href='#header'
        hidden={isHiddenScroll}
      >
        ▲
      </a>
    </div>
  )
}

export default LinksContainer
