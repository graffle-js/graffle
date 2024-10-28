export type Transport = TransportMemory | TransportHttp

export type TransportMemory = typeof Transport.memory

export type TransportHttp = typeof Transport.http

export const Transport = {
  memory: `memory`,
  http: `http`,
} as const

// todo remove interface concept?
export type Interface = InterfaceRaw | InterfaceTyped

export type InterfaceRaw = 'raw'

export type InterfaceTyped = 'typed'
