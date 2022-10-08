import { useEffect, useState } from 'react'

export const usePagination = <T>(list: T[], sliceEnd: number) => {
  const [newList, setNewList] = useState<T[]>([])
  const [paginationList, setPaginationList] = useState<boolean[]>([])

  useEffect(() => {
    if (sliceEnd > 0 && list.length > 0) {
      const listLength: number = Math.ceil(list.length / sliceEnd)
      const newArray: boolean[] = Array<boolean>(listLength).fill(false)

      setNewList(list.slice(0, sliceEnd))
      setPaginationList(newArray.fill(true, 0, 1))
    }
  }, [list, sliceEnd])

  const changePagination = (index: number) => {
    const start = index * sliceEnd
    const end = start + sliceEnd

    setPaginationList(
      paginationList.map((value: boolean, paginationIndex: number) => {
        if (paginationIndex === index) return !value
        return false
      })
    )

    setNewList(list.slice(start, end))
  }

  return {
    newList,
    paginationList,
    changePagination
  }
}
