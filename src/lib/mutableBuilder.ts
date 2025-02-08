import { mapValues } from 'es-toolkit'

export const createMutableBuilder = (
  parameters: { data: object; builder: Record<string, (...args: any[]) => any> },
) => {
  const builderInputWrapped = mapValues(parameters.builder, (method) => {
    return (...args: any[]) => {
      const result = method(...args)
      if (result === undefined) return builderFinal
      return result
    }
  })
  const builderFinal = {
    data: parameters.data,
    return: () => parameters.data,
    ...builderInputWrapped,
  }
  return builderFinal
}
