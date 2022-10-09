import * as React from 'react'
import GitHub from '../components/links/GitHub'
import Linkedin from '../components/links/Linkedin'
import { useScrollEvent } from '../hooks/useScrollEvent'
import '../styles/container/linksContainer.css'

const LinksContainer: React.FC = () => {
  const isHiddenScroll = useScrollEvent(100)

  return (
    <div className='links-container' >
      <GitHub />
      <Linkedin />

      <a
        className='pointer-link'
        href='#header'
        hidden={isHiddenScroll}
      >
        ▲
      </a>

      <a
        className='pointer-link'
        href='#pagination'
      >
        ▼
      </a>
    </div>
  )
}

export default LinksContainer
