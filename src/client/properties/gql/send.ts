import type { Grafaid } from '../../../lib/grafaid/__.js'
import { isString, type SimplifyNullable } from '../../../lib/prelude.js'
import type { Context } from '../../../types/context.js'
import type { HandleOutput } from '../../handleOutput.js'

// dprint-ignore
export type SendArguments<$TypedDocument extends string | Grafaid.Document.Typed.TypedDocumentLike> =
  $TypedDocument extends string 
    ? ([operationName?: string] | [operationName?: string, variables?: Grafaid.Document.Typed.Variables] | [variables?: Grafaid.Document.Typed.Variables])
    : SendArguments_<Grafaid.Document.Typed.VariablesOf<$TypedDocument>>

// dprint-ignore
type SendArguments_<$Variables extends Grafaid.Document.Typed.Variables> =
	SendArguments__<$Variables, Grafaid.Document.Typed.GetVariablesInputKind<$Variables>>

// dprint-ignore
type SendArguments__<$Variables extends Grafaid.Document.Typed.Variables, $VariablesKind extends Grafaid.Document.Typed.VariablesInputKind> =
		$VariablesKind extends 'none'      ? ([operationName?: string]) :
		$VariablesKind extends 'optional'  ? ([operationName?: string] | [operationName?: string, variables?: $Variables] | [variables?: $Variables]) :
		$VariablesKind extends 'required'  ? ([operationName: string, variables: $Variables] | [variables: $Variables]) :
		                                      never

// dprint-ignore
export interface DocumentController<$Context extends Context, $TypedDocument extends Grafaid.Document.Typed.TypedDocumentLike> {
  /**
   * Send the document. You can pass an operation name and variables.
   *
   * If the document has multiple operations you must specify the operation name to be executed.
   *
   * If the operation being selected for execution has required variables you must pass them.
   *
   * @example
   *
   * ```ts
   * const data = await graffle.gql`{ pokemons { name } }`.send()
   * ```
   *
   * @example
   * ```ts
   * const data = await graffle.gql`
   *   query($type: PokemonType!) {
   *     pokemons(filter: { type: $type }) { name }
   *   }
   * `.send({ type: `electric` })
   * ```
   *
   * @example
   * ```ts
   * const document = graffle.gql`
   *   mutation createPokemon($name: String!, $type: PokemonType!) {
   *     addPokemon(name: $name, type: $type) {
   *      name
   *     }
   *   }
   *   query pokemonsType($type: PokemonType!) {
   *     pokemons(filter: { type: $type }) { name }
   *   }
   * `
   * const data1 = await document.send(`createPokemon`, { name: `Pikabar`, type: `electric` })
   * const data2 = await document.send(`pokemonsType`, { type: `electric` })
   * ```
   */
  send(...args: SendArguments<$TypedDocument>):
    Promise<SimplifyNullable<HandleOutput<$Context, Grafaid.Document.Typed.ResultOf<$TypedDocument>>>>
}

export type sendArgumentsImplementation =
  | []
  | [string]
  | [Grafaid.Document.Typed.Variables]
  | [
    string,
    Grafaid.Document.Typed.Variables,
  ]

export const resolveSendArguments = (args: sendArgumentsImplementation) => {
  const operationName = isString(args[0]) ? args[0] : undefined
  const variables = isString(args[0]) ? args[1] : args[0]
  return {
    operationName,
    variables,
  }
}
