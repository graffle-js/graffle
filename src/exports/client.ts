export { type Client, create } from '#src/client/client.js'
import type { Docpar } from '#docpar'
export type Operation = Docpar.Operation
export type TypedFullDocument = Docpar.TypedFullDocument
export { create as createSelect, select } from '#src/select/select.js'
export { Var } from '../docpar/object/var/$.js'
export { type TypedDocument } from '../lib/grafaid/typed-document/$.js'
