export const getData = async <T> (api: string): Promise<T | undefined> => {
  try {
    const res = await fetch(api)
    const data: T = await res.json()

    return data
  } catch {
    return undefined
  }
}
