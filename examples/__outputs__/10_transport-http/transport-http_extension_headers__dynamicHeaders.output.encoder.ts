export const encode = (value: string) => {
  return value.replace(/'x-sent-at-time', '\d+'/ig, `'x-sent-at-time', 'DYNAMIC_VALUE'`)
}
