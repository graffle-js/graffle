/**
 * @deprecated DocumentBuilderKit is deprecated. Use Docpar.Object instead.
 *
 * ```diff
 * - import { DocumentBuilderKit } from 'graffle'
 * + import { Docpar } from 'graffle'
 * ```
 *
 * Mapping:
 * - DocumentBuilderKit.Select → Docpar.Object.Select
 * - DocumentBuilderKit.Var → Docpar.Object.Var
 * - DocumentBuilderKit.InferResult → Docpar.Object.InferResult
 * - DocumentBuilderKit.ToGraphQLDocument → Docpar.Object.ToGraphQLDocument
 */
export { Object as DocumentBuilderKit } from '#src/docpar/$.js'
