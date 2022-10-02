import { IsActive } from '../typescript/types'

export const removeUndefined = <T>(array: (T | undefined)[]): T[] => {
  const newArray: T[] = []
  array.forEach((value: (T | undefined)) => {
    if (value) newArray.push(value)
  })

  return newArray
}

export const isActive = <T>(array: IsActive<T>[], id: T) => {
  return array
    .filter((value:IsActive<T>) => value.id === id)
    .every((value: IsActive<T>) => value.isActive)
}

export const createList = <T>(idsList: T[], isActive: boolean): IsActive<T>[] => {
  return idsList.map((value: T) => {
    return {
      id: value,
      isActive
    }
  })
}

export const changeIsActive = <T>(array: IsActive<T>[], id: T, isActiveByDefault: boolean): IsActive<T>[] => {
  return array.map((value: IsActive<T>) => {
    if (value.id === id) {
      return {
        id: value.id,
        isActive: !value.isActive
      }
    }

    return {
      id: value.id,
      isActive: isActiveByDefault
    }
  })
}
