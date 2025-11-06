import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Obj } from '@wollybeard/kit'
import { Str } from '@wollybeard/kit'
import type { Config } from '../config/config.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { codeImportNamed, importUtilities } from '../helpers/pathHelpers.js'
import { renderInlineType } from '../helpers/render.js'
import type { KindRenderers } from '../helpers/types.js'
import { ModuleGeneratorScalar } from './Scalar.js'

type ReferenceAssignments = string[]

export const ModuleGeneratorSchemaDrivenDataMap = createModuleGenerator(
  `SchemaDrivenDataMap`,
  import.meta.url,
  ({ config, code }) => {
    const rootsWithOpType = Obj.entries(config.schema.kindMap.index.Root)
      .map(_ => {
        if (_[1] === null) return null
        return { operationType: _[0], objectType: _[1] }
      }).filter(_ => _ !== null)
    const kindMap: GraphqlKit.Schema.Kind.KindMap['list'] = getKindMap(config)
    const kinds = Obj.entries(kindMap)

    // Get ArgsIndex for argumentsDescendant generation
    const argsIndex = GraphqlKit.Schema.Runtime.Args.Index.getArgsIndex(config.schema.instance)

    code(importModuleGenerator(config, ModuleGeneratorScalar))
    code(importUtilities(config))

    const referenceAssignments: ReferenceAssignments = []

    // Create standard scalar names set early so it can be used in type generation
    const standardScalarNames = new Set(kindMap.ScalarStandard?.map(_ => _.name) ?? [])

    // Generate type interfaces
    code(Str.Code.TS.Comment.title1(`Types`))
    code``
    for (const [kindName, nodes] of kinds) {
      // Skip all scalars - they are all referenced from $$Scalar module
      if (kindName === 'ScalarStandard' || kindName === 'ScalarCustom') continue
      for (const type of nodes) {
        const typeGenerator = kindTypeRenders[kindName] as any
        code(typeGenerator({ config, type: type as any, argsIndex, standardScalarNames }))
        code``
      }
    }

    // Generate runtime terms
    for (const [kindName, nodes] of kinds) {
      code(Str.Code.TS.Comment.title1(kindName))
      code``
      if (nodes.length === 0) {
        code`// None of your ${kindName}s have custom scalars.`
      }
      for (const type of nodes) {
        const codeGenerator = kindRenders[kindName] as any
        code(codeGenerator({ config, type: type as any, referenceAssignments, argsIndex, standardScalarNames }))
        code``
      }
      code``
    }

    code(Str.Code.TS.Comment.title1(`Reference Assignments`, `(avoids circular assignment issues)`))
    code``
    if (referenceAssignments.length === 0) {
      code`// None of your types have references to other non-scalar/enum types.`
    } else {
      code`// TODO: Contribute helper to Utilities to cast readonly data to mutable at type level.`
      code`// These assignments are needed to avoid circular references during module initialization.`
    }
    for (const referenceAssignment of referenceAssignments) {
      code`// @ts-expect-error Assignment to readonly property is needed for circular reference handling.`
      code(referenceAssignment)
    }
    code``

    code(Str.Code.TS.Comment.title1(`Index`))
    code``

    // Categorize types into input and output based on directionality
    const inputTypeNames: string[] = []
    const outputTypeNames: string[] = []
    // standardScalarNames already created earlier for type generation

    for (const [kindName, nodes] of kinds) {
      const names = nodes.map(_ => _.name)
      const directionality = getDirectionality(kindName)

      if (directionality === 'both' || directionality === 'in') {
        inputTypeNames.push(...names)
      }
      if (directionality === 'both' || directionality === 'out') {
        outputTypeNames.push(...names)
      }
    }

    // Generate SchemaDrivenDataMap interface
    code(`interface SchemaDrivenDataMap extends ${$.$$Utilities}.SchemaDrivenDataMap {`)
    code(`  readonly operations: {`)
    for (const type of kindMap.Root) {
      const operationType = rootsWithOpType.find(({ objectType }) => objectType.name === type.name)?.operationType
      if (!operationType) throw new Error(`Operation type not found for ${type.name}`)
      code(`    readonly ${operationType}: ${type.name}`)
    }
    code(`  }`)
    code(`  readonly directives: {}`)
    code(`  readonly inputTypes: {`)
    for (const name of inputTypeNames) {
      // All scalars reference $$Scalar directly, non-scalar types use interface name
      const isScalar = standardScalarNames.has(name) || kindMap.ScalarCustom?.some(_ => _.name === name)
      const typeRef = isScalar ? `${$.$$Scalar}.${name}` : name
      code(`    readonly ${name}: ${typeRef}`)
    }
    code(`  }`)
    code(`  readonly outputTypes: {`)
    for (const name of outputTypeNames) {
      // All scalars reference $$Scalar directly, non-scalar types use interface name
      const isScalar = standardScalarNames.has(name) || kindMap.ScalarCustom?.some(_ => _.name === name)
      const typeRef = isScalar ? `${$.$$Scalar}.${name}` : name
      code(`    readonly ${name}: ${typeRef}`)
    }
    code(`  }`)
    code(`  readonly scalarTypes: {`)
    // Export all scalars (standard + custom) for registry population
    const allScalarNames = [
      ...(kindMap.ScalarStandard?.map(_ => _.name) ?? []),
      ...(kindMap.ScalarCustom?.map(_ => _.name) ?? []),
    ]
    for (const name of allScalarNames) {
      code(`    readonly ${name}: ${$.$$Scalar}.${name}`)
    }
    code(`  }`)
    code(`}`)
    code``

    // Generate runtime const
    code`const $schemaDrivenDataMap: SchemaDrivenDataMap =`
    code(Str.Code.TS.TermObject.termObject({
      operations: kindMap.Root.map(type => {
        const operationType = rootsWithOpType.find(({ objectType }) => objectType.name === type.name)?.operationType
        if (!operationType) throw new Error(`Operation type not found for ${type.name}`)
        return [operationType, type.name] as const
      }),
      directives: {},
      inputTypes: Str.Code.TS.TermObject.directiveTermObject({
        $literal: inputTypeNames.map(name => {
          const isScalar = standardScalarNames.has(name) || kindMap.ScalarCustom?.some(_ => _.name === name)
          return isScalar ? `${name}: ${$.$$Scalar}.${name}` : name
        }).join(`,\n`),
      }),
      outputTypes: Str.Code.TS.TermObject.directiveTermObject({
        $literal: outputTypeNames.map(name => {
          const isScalar = standardScalarNames.has(name) || kindMap.ScalarCustom?.some(_ => _.name === name)
          return isScalar ? `${name}: ${$.$$Scalar}.${name}` : name
        }).join(`,\n`),
      }),
      scalarTypes: Str.Code.TS.TermObject.directiveTermObject({
        $literal: allScalarNames.map(name => `${name}: ${$.$$Scalar}.${name}`).join(`,\n`),
      }),
    }))
    code``
    code`export { $schemaDrivenDataMap as schemaDrivenDataMap }`
    code`export type { SchemaDrivenDataMap }`
  },
)

//
//
//
// Helpers
// -------
//
//
//

/**
 * Get minimal kind set for SDDM
 *
 * If feature operationVariables is enabled then we need to emit all paths to inputs.
 * If feature customScalars is enabled then we need to emit all paths to customs scalar inputs AND outputs.
 * If both are enabled the merged requirement is: all paths to inputs AND custom scalar outputs.
 */
const getKindMap = (config: Config) => {
  const { schema: { kindMap } } = config
  const condition = typeCondition(config)
  return {
    // When "variables" enabled, we need to know all named types to be able to write them out.
    ScalarStandard: kindMap.list.ScalarStandard.filter(() => config.runtimeFeatures.operationVariables),
    ScalarCustom: kindMap.list.ScalarCustom.filter(() => config.runtimeFeatures.customScalars),
    Enum: kindMap.list.Enum.filter(() => config.runtimeFeatures.operationVariables),
    InputObject: kindMap.list.InputObject.filter(condition),
    OutputObject: kindMap.list.OutputObject.filter(condition),
    Interface: kindMap.list.Interface.filter(condition),
    Union: kindMap.list.Union.filter(condition),
    Root: kindMap.list.Root.filter(condition),
  }
}

const typeCondition = (config: Config) => {
  if (config.runtimeFeatures.customScalars) {
    if (config.runtimeFeatures.operationVariables) {
      const isHasInputOrOutputCustomScalar = () => true // todo
      return isHasInputOrOutputCustomScalar
    }
    return GraphqlKit.Schema.Scalars.Custom.isHasCustomScalars
  }

  if (config.runtimeFeatures.operationVariables) {
    const isHasInput = () => true // todo
    return isHasInput
  }

  return falseFilter
}

const falseFilter = () => false
const trueFilter = () => true

const inputTypeCondition = (config: Config) => {
  if (config.runtimeFeatures.operationVariables) return trueFilter

  if (config.runtimeFeatures.customScalars) {
    return GraphqlKit.Schema.Scalars.Custom.isHasCustomScalars
  }

  return falseFilter
}

/**
 * Determine whether a GraphQL kind can appear in input position, output position, or both.
 *
 * @remarks
 * - Scalars and Enums can be used in both input and output positions
 * - InputObject can only appear in input positions
 * - OutputObject, Interface, Union, Root can only appear in output positions
 *
 * @returns 'in' | 'out' | 'both'
 *
 * @todo Upstream to GraphqlKit.Schema.Runtime - this is intrinsic GraphQL type system knowledge
 */
const getDirectionality = (kindName: keyof GraphqlKit.Schema.Kind.KindMap['list']): 'in' | 'out' | 'both' => {
  if (kindName === 'ScalarStandard' || kindName === 'ScalarCustom' || kindName === 'Enum') {
    return 'both'
  }
  if (kindName === 'InputObject') {
    return 'in'
  }
  // OutputObject, Interface, Union, Root
  return 'out'
}

//
//
//
// Code Generators
// ---------------
//
//
//

const ScalarType = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.ScalarType }
>(
  () => {
    // No-op: Standard scalars are referenced directly from $$Scalar, no const declarations needed
  },
)

const ScalarTypeCustom = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.ScalarType }
>(
  () => {
    // No-op: Custom scalars are also referenced directly from $$Scalar, no const declarations needed
  },
)

const UnionType = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.UnionType; referenceAssignments: ReferenceAssignments }
>(
  ({ code, type }) => {
    // This takes advantage of the fact that in GraphQL, in a union type, all members that happen
    // to have fields of the same name, those fields MUST be the same type.
    // See:
    // - https://github.com/graphql/graphql-js/issues/1361
    // - https://stackoverflow.com/questions/44170603/graphql-using-same-field-names-in-different-types-within-union
    //
    // So what we do is inline all the custom scalar paths of all union members knowing
    // that they could never conflict.
    code(Str.Code.TS.constDeclTyped(
      type.name,
      type.name,
      Str.Code.TS.TermObject.termObject({
        _tag: Str.Code.TS.string('outputObject'),
        fields: Str.Code.TS.TermObject.directiveTermObject({
          $spread: type.getTypes().filter(GraphqlKit.Schema.Scalars.Custom.isHasCustomScalars).map(memberType =>
            memberType.name + `.fields`
          ),
        }),
      }),
    ))
  },
)

const InterfaceType = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.InterfaceType; referenceAssignments: ReferenceAssignments }
>(
  ({ code, type, config }) => {
    const implementorTypes = GraphqlKit.Schema.Kind.KindMap.getInterfaceImplementors(config.schema.kindMap, type)
    code(Str.Code.TS.constDeclTyped(
      type.name,
      type.name,
      Str.Code.TS.TermObject.termObject({
        _tag: Str.Code.TS.string('outputObject'),
        fields: Str.Code.TS.TermObject.directiveTermObject({
          $spread: implementorTypes.filter(GraphqlKit.Schema.Scalars.Custom.isHasCustomScalars).map(memberType =>
            memberType.name + `.fields`
          ),
        }),
      }),
    ))
  },
)

const ObjectType = createCodeGenerator<
  {
    type: GraphqlKit.Schema.Runtime.Nodes.ObjectType
    referenceAssignments: ReferenceAssignments
    argsIndex: GraphqlKit.Schema.Runtime.Args.Index.ArgsIndex
    standardScalarNames: Set<string>
  }
>(
  ({ config, code, type, referenceAssignments, argsIndex, standardScalarNames }) => {
    const o: Str.Code.TS.TermObject.TermObject = {
      _tag: Str.Code.TS.string('outputObject'),
    }

    config.extensions.forEach(_ => {
      _.schemaDrivenDataMap?.onObjectType?.({
        config,
        sddmNode: o,
        graphqlType: type,
      })
    })

    // Fields of this object.
    // ---------------------
    const of: Str.Code.TS.TermObject.TermObject = {}
    o['fields'] = of

    const condition = typeCondition(config)

    const outputFields = Object.values(type.getFields()).filter(condition)
    for (const outputField of outputFields) {
      const outputFieldNamedType = GraphqlKit.Schema.Runtime.getNamedType(outputField.type)
      const sddmNodeOutputField: Str.Code.TS.TermObject.DirectiveTermObjectLike<Str.Code.TS.TermObject.TermObject> = {
        $fields: {
          _tag: Str.Code.TS.string('outputField'),
        },
      }
      of[outputField.name] = sddmNodeOutputField

      // Field Arguments
      const inputCondition = inputTypeCondition(config)
      const args = outputField.args.filter(inputCondition)
      if (args.length > 0) {
        const ofItemAs: Str.Code.TS.TermObject.TermObject = {}
        sddmNodeOutputField.$fields['arguments'] = ofItemAs

        for (const arg of args) {
          const ofItemA: Str.Code.TS.TermObject.TermObject = {
            _tag: Str.Code.TS.string('argumentOrInputField'),
          }
          ofItemAs[arg.name] = ofItemA

          const argType = GraphqlKit.Schema.Runtime.getNamedType(arg.type)
          // dprint-ignore
          if (
             (config.runtimeFeatures.customScalars && GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(argType)) ||
             // For variables, we need to know the variable type to write it out, so we always need the named type.
             (config.runtimeFeatures.operationVariables)
          ) {
              const isScalar = GraphqlKit.Schema.Runtime.Nodes.isScalarType(argType)
              ofItemA['namedType'] = isScalar ? `${$.$$Scalar}.${argType.name}` : argType.name
              // For variables, we need to know the variable type to write it out, so we always need the inline type.
              if (config.runtimeFeatures.operationVariables) {
                ofItemA['inlineType'] = renderInlineType(arg.type)
              }
            }
        }

        // Generate top-level $argumentsType map for O(1) type lookup (runtime value)
        if (config.runtimeFeatures.operationVariables) {
          const argumentsTypeObject: Str.Code.TS.TermObject.TermObject = {}
          for (const arg of args) {
            argumentsTypeObject[arg.name] = `null as any as ${renderResolvedType(arg.type, config)}`
          }
          sddmNodeOutputField.$fields['$argumentsType'] = argumentsTypeObject
        }
      }

      // Add argumentsDescendant if field's return type has fields with arguments
      // This enables type-level traversal through fields without direct arguments
      const typeInfo = argsIndex[outputFieldNamedType.name]
      if (typeInfo && GraphqlKit.Schema.Runtime.Nodes.isObjectType(outputFieldNamedType)) {
        // Only add argumentsDescendant if the type actually has argument-bearing fields
        const hasArgumentsDescendant = Object.values(typeInfo.fields).some(fieldInfo =>
          fieldInfo.args && fieldInfo.args.length > 0 || fieldInfo.type
        )
        if (hasArgumentsDescendant) {
          referenceAssignments.push(
            `${type.name}.fields[\`${outputField.name}\`]!.argumentsDescendant = ${outputFieldNamedType.name}`,
          )
          sddmNodeOutputField.$fields['argumentsDescendant'] = `null as any as ${outputFieldNamedType.name}`
        }
      }

      config.extensions.forEach(_ => {
        _.schemaDrivenDataMap?.onOutputField?.({
          config,
          sddmNode: sddmNodeOutputField,
          graphqlType: outputField,
        })
      })

      if (condition(outputFieldNamedType)) {
        if (GraphqlKit.Schema.Runtime.Nodes.isScalarType(outputFieldNamedType)) {
          if (
            config.runtimeFeatures.customScalars
            && GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(outputFieldNamedType)
          ) {
            // All scalars reference $$Scalar
            sddmNodeOutputField.$fields['namedType'] = `${$.$$Scalar}.${outputFieldNamedType.name}`
          }
        } else if (
          GraphqlKit.Schema.Runtime.Nodes.isUnionType(outputFieldNamedType)
          || GraphqlKit.Schema.Runtime.Nodes.isObjectType(outputFieldNamedType)
          || GraphqlKit.Schema.Runtime.Nodes.isInterfaceType(outputFieldNamedType)
        ) {
          referenceAssignments.push(
            `${type.name}.fields[\`${outputField.name}\`]!.namedType = ${outputFieldNamedType.name}`,
          )
          sddmNodeOutputField.$fields['namedType'] = `null as any as ${outputFieldNamedType.name}`
        }
      }
    }

    code(
      Str.Code.TS.constDeclTyped(
        type.name,
        type.name,
        Str.Code.TS.TermObject.termObject(o),
      ),
    )
  },
)

const EnumType = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.EnumType; referenceAssignments: ReferenceAssignments }
>(
  ({ config, code, type }) => {
    const o: Str.Code.TS.TermObject.TermObject = {
      _tag: Str.Code.TS.string('enum'),
      name: Str.Code.TS.string(type.name),
    }

    // Generate $type property for O(1) type lookup (runtime value)
    if (config.runtimeFeatures.operationVariables) {
      const enumValues = type.getValues().map(v => Str.Code.TS.string(v.name)).join(' | ')
      o['$type'] = `null as any as ${enumValues}`
    }

    code(Str.Code.TS.constDeclTyped(
      type.name,
      type.name,
      Str.Code.TS.TermObject.termObject(o),
    ))
  },
)

const InputObjectType = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.ObjectType; referenceAssignments: ReferenceAssignments }
>(
  ({ config, code, type, referenceAssignments }) => {
    const o: Str.Code.TS.TermObject.TermObject = {
      _tag: Str.Code.TS.string('inputObject'),
    }

    const inputFields = Object.values(type.getFields())

    if (config.runtimeFeatures.operationVariables) {
      o['name'] = Str.Code.TS.string(type.name)
      const customScalarFields = inputFields
        .filter(GraphqlKit.Schema.Scalars.Custom.isHasCustomScalarInputs)
        .map(inputField => inputField.name)
        .map(Str.Code.TS.string)
      if (customScalarFields.length) {
        o['fieldsContainingCustomScalars'] = Str.Code.TS.TermObject.termList(customScalarFields)
      }
    }
    const f: Str.Code.TS.TermObject.TermObjectOf<
      Str.Code.TS.TermObject.DirectiveTermObjectLike<Str.Code.TS.TermObject.TermObject>
    > = {}
    o['fields'] = f

    for (const inputField of inputFields) {
      const inputFieldType = GraphqlKit.Schema.Runtime.getNamedType(inputField.type)

      // dprint-ignore
      const isPresent =
        config.runtimeFeatures.operationVariables ||
        (config.runtimeFeatures.customScalars &&
          (GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(inputFieldType) ||
          (GraphqlKit.Schema.Runtime.Nodes.isInputObjectType(inputFieldType) && GraphqlKit.Schema.Scalars.Custom.isHasCustomScalarInputs(inputFieldType))))

      if (!isPresent) continue

      f[inputField.name] = {
        $fields: {
          _tag: Str.Code.TS.string('argumentOrInputField'),
        },
      }

      if (GraphqlKit.Schema.Runtime.Nodes.isScalarType(inputFieldType)) {
        // All scalars reference $$Scalar
        f[inputField.name]!.$fields['namedType'] = `${$.$$Scalar}.${inputFieldType.name}`
      } else if (GraphqlKit.Schema.Runtime.Nodes.isInputObjectType(inputFieldType)) {
        // All InputObjects use deferred assignment to handle circular references
        referenceAssignments.push(
          `${type.name}.fields![\`${inputField.name}\`]!.namedType = ${inputFieldType.name}`,
        )
        f[inputField.name]!.$fields['namedType'] = `null as any as ${inputFieldType.name}`
      } else {
        // All other types (enums)
        f[inputField.name]!.$fields['namedType'] = inputFieldType.name
      }

      if (config.runtimeFeatures.operationVariables) {
        f[inputField.name]!.$fields['inlineType'] = renderInlineType(inputField.type)
      }
    }

    // Generate top-level $type property for O(1) type lookup (runtime value)
    if (config.runtimeFeatures.operationVariables) {
      const typeObject: Str.Code.TS.TermObject.TermObject = {}
      for (const inputField of inputFields) {
        typeObject[inputField.name] = `null as any as ${renderResolvedType(inputField.type, config)}`
      }
      o['$type'] = typeObject
    }

    code(
      Str.Code.TS.constDeclTyped(
        type.name,
        type.name,
        Str.Code.TS.TermObject.termObject(o),
      ),
    )
  },
)

const kindRenders = {
  ScalarStandard: ScalarType,
  ScalarCustom: ScalarTypeCustom,
  Enum: EnumType,
  Union: UnionType,
  Interface: InterfaceType,
  InputObject: InputObjectType,
  OutputObject: ObjectType,
  Root: ObjectType,
} satisfies KindRenderers

//
//
//
// Type Generators
// ---------------
//
//
//

const ScalarTypeInterface = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.ScalarType }
>(
  ({ code, type }) => {
    code(`interface ${type.name} extends ${$.$$Utilities}.SchemaDrivenDataMap.Scalar {`)
    code(`  readonly name: ${Str.Code.TS.string(type.name)}`)
    code(`}`)
  },
)

const EnumTypeInterface = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.EnumType }
>(
  ({ config, code, type }) => {
    code(`interface ${type.name} extends ${$.$$Utilities}.SchemaDrivenDataMap.Enum {`)
    code(`  readonly _tag: ${Str.Code.TS.string('enum')}`)
    code(`  readonly name: ${Str.Code.TS.string(type.name)}`)

    // Generate $type property for O(1) type lookup
    if (config.runtimeFeatures.operationVariables) {
      const enumValues = type.getValues().map(v => Str.Code.TS.string(v.name)).join(' | ')
      code(`  readonly $type: ${enumValues}`)
    }

    code(`}`)
  },
)

const InputObjectTypeInterface = createCodeGenerator<
  {
    type: GraphqlKit.Schema.Runtime.Nodes.ObjectType
    standardScalarNames: Set<string>
  }
>(
  ({ config, code, type, standardScalarNames }) => {
    const inputFields = Object.values(type.getFields())

    code(`interface ${type.name} extends ${$.$$Utilities}.SchemaDrivenDataMap.InputObject {`)
    code(`  readonly _tag: ${Str.Code.TS.string('inputObject')}`)

    if (config.runtimeFeatures.operationVariables) {
      code(`  readonly name: ${Str.Code.TS.string(type.name)}`)
      const customScalarFields = inputFields
        .filter(GraphqlKit.Schema.Scalars.Custom.isHasCustomScalarInputs)
        .map(inputField => inputField.name)
      if (customScalarFields.length) {
        const tuple = Str.Code.TS.tuple(customScalarFields.map(Str.Code.TS.string))
        code(`  readonly fieldsContainingCustomScalars: ${tuple}`)
      }
    }

    code(`  readonly fields: {`)

    for (const inputField of inputFields) {
      const inputFieldType = GraphqlKit.Schema.Runtime.getNamedType(inputField.type)

      // dprint-ignore
      const isPresent =
        config.runtimeFeatures.operationVariables ||
        (config.runtimeFeatures.customScalars &&
          (GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(inputFieldType) ||
          (GraphqlKit.Schema.Runtime.Nodes.isInputObjectType(inputFieldType) && GraphqlKit.Schema.Scalars.Custom.isHasCustomScalarInputs(inputFieldType))))

      if (!isPresent) continue

      code(`    readonly ${inputField.name}: {`)
      code(`      readonly _tag: ${Str.Code.TS.string('argumentOrInputField')}`)

      // All fields need namedType
      const isScalar = GraphqlKit.Schema.Runtime.Nodes.isScalarType(inputFieldType)
      const inputFieldTypeRef = isScalar ? `${$.$$Scalar}.${inputFieldType.name}` : inputFieldType.name
      code(`      readonly namedType: ${inputFieldTypeRef}`)

      if (config.runtimeFeatures.operationVariables) {
        code(`      readonly inlineType: ${renderInlineType(inputField.type)}`)
      }

      code(`    }`)
    }

    code(`  }`)

    // Generate top-level $type property for O(1) type lookup
    if (config.runtimeFeatures.operationVariables) {
      code(`  readonly $type: {`)
      for (const inputField of inputFields) {
        const isNullable = GraphqlKit.Schema.Runtime.Nodes.isNullableType(inputField.type)
        const optionalMarker = isNullable ? '?' : ''
        code(`    ${inputField.name}${optionalMarker}: ${renderResolvedType(inputField.type, config)}`)
      }
      code(`  }`)
    }

    code(`}`)
  },
)

const ObjectTypeInterface = createCodeGenerator<
  {
    type: GraphqlKit.Schema.Runtime.Nodes.ObjectType
    argsIndex: GraphqlKit.Schema.Runtime.Args.Index.ArgsIndex
    standardScalarNames: Set<string>
  }
>(
  ({ config, code, type, argsIndex, standardScalarNames }) => {
    const condition = typeCondition(config)
    const inputCondition = inputTypeCondition(config)

    // Create sddmNode and run extension hooks to determine which properties to emit
    const sddmNodeObject: Str.Code.TS.TermObject.TermObject = {
      _tag: Str.Code.TS.string('outputObject'),
    }

    config.extensions.forEach(_ => {
      _.schemaDrivenDataMap?.onObjectType?.({
        config,
        sddmNode: sddmNodeObject,
        graphqlType: type,
      })
    })

    const sddmNodeOutputFields: Record<
      string,
      Str.Code.TS.TermObject.DirectiveTermObjectLike<Str.Code.TS.TermObject.TermObject>
    > = {}

    code(`interface ${type.name} extends ${$.$$Utilities}.SchemaDrivenDataMap.OutputObject {`)
    code(`  readonly _tag: ${Str.Code.TS.string('outputObject')}`)
    code(`  readonly fields: {`)

    const outputFields = Object.values(type.getFields()).filter(condition)
    for (const outputField of outputFields) {
      const outputFieldNamedType = GraphqlKit.Schema.Runtime.getNamedType(outputField.type)

      // Create sddmNode for this output field and run extension hooks
      const sddmNodeOutputField: Str.Code.TS.TermObject.DirectiveTermObjectLike<Str.Code.TS.TermObject.TermObject> = {
        $fields: {
          _tag: Str.Code.TS.string('outputField'),
        },
      }
      sddmNodeOutputFields[outputField.name] = sddmNodeOutputField

      config.extensions.forEach(_ => {
        _.schemaDrivenDataMap?.onOutputField?.({
          config,
          sddmNode: sddmNodeOutputField,
          graphqlType: outputField,
        })
      })

      code(`    readonly ${outputField.name}: {`)
      code(`      readonly _tag: ${Str.Code.TS.string('outputField')}`)

      // Field Arguments
      const args = outputField.args.filter(inputCondition)
      if (args.length > 0) {
        code(`      readonly arguments: {`)

        for (const arg of args) {
          const argType = GraphqlKit.Schema.Runtime.getNamedType(arg.type)

          // dprint-ignore
          if (
            (config.runtimeFeatures.customScalars && GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(argType)) ||
            (config.runtimeFeatures.operationVariables)
          ) {
            code(`        readonly ${arg.name}: {`)
            code(`          readonly _tag: ${Str.Code.TS.string('argumentOrInputField')}`)
            const isScalar = GraphqlKit.Schema.Runtime.Nodes.isScalarType(argType)
            const argTypeRef = isScalar ? `${$.$$Scalar}.${argType.name}` : argType.name
            code(`          readonly namedType: ${argTypeRef}`)
            if (config.runtimeFeatures.operationVariables) {
              code(`          readonly inlineType: ${renderInlineType(arg.type)}`)
            }
            code(`        }`)
          }
        }

        code(`      }`)

        // Generate top-level $argumentsType map for O(1) type lookup
        if (config.runtimeFeatures.operationVariables) {
          code(`      readonly $argumentsType: {`)
          for (const arg of args) {
            const isNullable = GraphqlKit.Schema.Runtime.Nodes.isNullableType(arg.type)
            const optionalMarker = isNullable ? '?' : ''
            code(`        ${arg.name}${optionalMarker}: ${renderResolvedType(arg.type, config)}`)
          }
          code(`      }`)
        }
      }

      // Add argumentsDescendant if field's return type has fields with arguments
      const typeInfo = argsIndex[outputFieldNamedType.name]
      if (typeInfo && GraphqlKit.Schema.Runtime.Nodes.isObjectType(outputFieldNamedType)) {
        const hasArgumentsDescendant = Object.values(typeInfo.fields).some(fieldInfo =>
          fieldInfo.args && fieldInfo.args.length > 0 || fieldInfo.type
        )
        if (hasArgumentsDescendant) {
          code(`      readonly argumentsDescendant: ${outputFieldNamedType.name}`)
        }
      }

      // Add namedType reference
      if (condition(outputFieldNamedType)) {
        if (GraphqlKit.Schema.Runtime.Nodes.isScalarType(outputFieldNamedType)) {
          if (
            config.runtimeFeatures.customScalars
            && GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(outputFieldNamedType)
          ) {
            // All scalars reference $$Scalar
            code(`      readonly namedType: ${$.$$Scalar}.${outputFieldNamedType.name}`)
          }
        } else if (
          GraphqlKit.Schema.Runtime.Nodes.isUnionType(outputFieldNamedType)
          || GraphqlKit.Schema.Runtime.Nodes.isObjectType(outputFieldNamedType)
          || GraphqlKit.Schema.Runtime.Nodes.isInterfaceType(outputFieldNamedType)
        ) {
          code(`      readonly namedType: ${outputFieldNamedType.name}`)
        }
      }

      // Add extensions if present
      const extensionsValue = sddmNodeOutputFields[outputField.name]!.$fields['extensions']
      if (extensionsValue) {
        code(`      readonly extensions: ${JSON.stringify(extensionsValue)}`)
      }

      code(`    }`)
    }

    code(`  }`)

    // Add extensions to OutputObject if present
    const objectExtensions = sddmNodeObject['extensions']
    if (objectExtensions) {
      code(`  readonly extensions: ${JSON.stringify(objectExtensions)}`)
    }

    code(`}`)
  },
)

const UnionTypeInterface = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.UnionType }
>(
  ({ code, type }) => {
    // For unions, the fields are spread from member types at runtime
    // At the type level, we just extend the base and let the runtime handle field merging
    code(`interface ${type.name} extends ${$.$$Utilities}.SchemaDrivenDataMap.OutputObject {`)
    code(`  readonly _tag: ${Str.Code.TS.string('outputObject')}`)
    code(`  readonly fields: ${$.$$Utilities}.SchemaDrivenDataMap.OutputObject['fields']`)
    code(`}`)
  },
)

const InterfaceTypeInterface = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.InterfaceType }
>(
  ({ code, type }) => {
    // For interfaces, the fields are spread from implementor types at runtime
    // At the type level, we just extend the base and let the runtime handle field merging
    code(`interface ${type.name} extends ${$.$$Utilities}.SchemaDrivenDataMap.OutputObject {`)
    code(`  readonly _tag: ${Str.Code.TS.string('outputObject')}`)
    code(`  readonly fields: ${$.$$Utilities}.SchemaDrivenDataMap.OutputObject['fields']`)
    code(`}`)
  },
)

/**
 * Render the fully resolved TypeScript type for an argument or input field.
 *
 * Pre-computes the complete TypeScript type including:
 * - Scalar decoded types via codec
 * - List wrappers (arrays)
 * - Nullability (null | undefined unions)
 * - Proper nesting of lists and nullability
 *
 * The resulting type is used in the `$type` property for O(1) type lookup during variable inference.
 *
 * @param type - The GraphQL type to resolve
 * @param config - Generator configuration
 * @returns The fully resolved TypeScript type string (e.g., "string | null | undefined", "Date[]")
 */
const renderResolvedType = (type: GraphqlKit.Schema.Runtime.NodeGroups.Types, config: Config): string => {
  const namedType = GraphqlKit.Schema.Runtime.getNamedType(type)

  // Determine base type reference
  let baseType: string
  if (GraphqlKit.Schema.Runtime.Nodes.isScalarType(namedType)) {
    baseType = `${$.$$Scalar}.${namedType.name}['codec']['_typeDecoded']`
  } else if (GraphqlKit.Schema.Runtime.Nodes.isEnumType(namedType)) {
    // Enum - reference the pre-computed enum type (enums are in module scope)
    baseType = `${namedType.name}['$type']`
  } else {
    // InputObject - reference the TypeScript input type from SDDM
    baseType = `SchemaDrivenDataMap['inputTypes']['${namedType.name}']['$type']`
  }

  // Check if it's wrapped in a list
  let currentType = type
  let listDepth = 0

  // Unwrap NonNull if present at the top level
  if (GraphqlKit.Schema.Runtime.Nodes.isNonNullType(currentType)) {
    currentType = currentType.ofType
  }

  // Count list depth and build array wrappers
  while (GraphqlKit.Schema.Runtime.Nodes.isListType(currentType)) {
    listDepth++
    currentType = GraphqlKit.Schema.Runtime.Nodes.isNonNullType(currentType.ofType)
      ? currentType.ofType.ofType
      : currentType.ofType
  }

  // Apply list wrappers (readonly for GraphQL input immutability)
  let resultType = baseType
  for (let i = 0; i < listDepth; i++) {
    resultType = `readonly (${resultType})[]`
  }

  // Add nullability
  // According to GraphQL spec, nullable arguments can be:
  // - undefined (omitted)
  // - null (explicitly null)
  // - the actual value
  if (GraphqlKit.Schema.Runtime.Nodes.isNullableType(type)) {
    resultType = `${resultType} | null | undefined`
  }

  return resultType
}

const kindTypeRenders = {
  ScalarStandard: ScalarTypeInterface,
  ScalarCustom: ScalarTypeInterface,
  Enum: EnumTypeInterface,
  Union: UnionTypeInterface,
  Interface: InterfaceTypeInterface,
  InputObject: InputObjectTypeInterface,
  OutputObject: ObjectTypeInterface,
  Root: ObjectTypeInterface,
} satisfies KindRenderers
