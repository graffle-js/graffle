import { mapValues } from 'es-toolkit'

export const createMutableBuilder = (
  parameters: { data: object; builder: Record<string, (...args: any[]) => any> },
) => {
  const builder = mapValues(parameters.builder, (method) => {
    return (...args: any[]) => {
      const result = method(...args)
      if (result === undefined) return builder
      return result
    }
  })
  return {
    data: parameters.data,
    ...builder,
  }
}
