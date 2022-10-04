import { useState } from 'react'
import { changeIsActive, createList } from '../tools/array'
import { IsActive } from '../typescript/types'

export const useNavItems = (idsList: string[]) => {
  const [itemsList, setItemsList] = useState<IsActive<string>[]>(
    createList<string>(idsList, false)
  )

  const [hiddenItemsList, setHiddenItemsList] = useState<IsActive<string>[]>(
    createList<string>(idsList, true)
  )

  const [id, setId] = useState<string>('')

  const reset = () => {
    setItemsList(createList<string>(idsList, false))
    setHiddenItemsList(createList<string>(idsList, true))
    setId('')
  }

  const changeActive = (itemId: string) => {
    if (itemId !== id) {
      setItemsList(changeIsActive<string>(itemsList, itemId, false))
      setId(itemId)
    }
  }

  const changeHidden = (itemId: string) => {
    setHiddenItemsList(changeIsActive<string>(hiddenItemsList, itemId, true))
  }

  return {
    itemsList,
    hiddenItemsList,
    reset,
    changeActive,
    changeHidden
  }
}
