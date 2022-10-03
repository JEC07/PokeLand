import { useEffect, useState } from 'react'

export const useScrollEvent = (scrollLimit: number) => {
  const [isHiddenScroll, setIsHiddenScroll] = useState<boolean>(true)

  useEffect(() => {
    const setAnchor = () => {
      const scroll = document.documentElement.scrollTop

      if (scroll < scrollLimit) return setIsHiddenScroll(true)
      return setIsHiddenScroll(false)
    }

    window.addEventListener('scroll', setAnchor)
    return () => window.removeEventListener('scroll', setAnchor)
  })

  return isHiddenScroll
}
