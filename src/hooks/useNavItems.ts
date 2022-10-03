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

  const reset = () => {
    setItemsList(createList<string>(idsList, false))
    setHiddenItemsList(createList<string>(idsList, true))
  }

  const changeActive = (id: string) => {
    setItemsList(changeIsActive<string>(itemsList, id, false))
  }

  const changeHidden = (id: string) => {
    setHiddenItemsList(changeIsActive<string>(hiddenItemsList, id, true))
  }

  return {
    itemsList,
    hiddenItemsList,
    reset,
    changeActive,
    changeHidden
  }
}
