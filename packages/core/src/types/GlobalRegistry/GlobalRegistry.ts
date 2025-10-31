import type { Client } from './types.js'

declare global {
  export namespace GraffleGlobal {
    interface Clients {}
  }
}

export * as GlobalRegistry from './types.js'

export type GlobalRegistry = Record<string, Client>
