export type ArgValue = string | boolean | null | number | ArgsObject

export type ArgsObject = { [k: string]: ArgValue }

export const key = `$`

export const enumKeyPrefix = `$`

export const enumKeyPrefixPattern = /^\$/g

export const enumKeyPrefixStrip = (key: string) => key.replace(enumKeyPrefixPattern, ``)

export const isEnumKey = (key: string) => key.startsWith(enumKeyPrefix)
