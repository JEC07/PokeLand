import { useState } from 'react'

export const useActive = (initialState: boolean) => {
  const [isActive, setIsActive] = useState<boolean>(initialState)

  const changeActive = () => setIsActive(!isActive)

  return {
    isActive,
    changeActive
  }
}
