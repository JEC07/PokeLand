import { useEffect, useState } from 'react'
import { removeUndefined } from '../tools/array'

export const usePromise = <T>(
  callBack: (value: string) => Promise<T | undefined>,
  searchList?: string[],
  search?: string
) => {
  const [resultList, setResultList] = useState<T[]>([])
  const [result, setResult] = useState<T>()

  useEffect(() => {
    if (searchList && searchList.length > 0) {
      const getPromises = async () => {
        const promiseList = searchList.map((value: string) => callBack(value))
        const data: (Awaited<T> | undefined)[] = await Promise.all(promiseList)

        setResultList(removeUndefined<T>(data))
      }

      getPromises()
    }

    if (search) {
      const getPromise = async () => {
        const data: Awaited<T> | undefined = await callBack(search)

        setResult(data)
      }

      getPromise()
    }
  }, [callBack, searchList, search])

  return {
    resultList,
    result
  }
}
