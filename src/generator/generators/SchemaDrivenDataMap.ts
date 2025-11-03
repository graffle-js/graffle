import { Docpar } from '#src/docpar/_.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Str } from '@wollybeard/kit'

const propertyNames = Docpar.propertyNames
import { Obj } from '@wollybeard/kit'
import type { Config } from '../config/config.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { importUtilities } from '../helpers/pathHelpers.js'
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

    code(importModuleGenerator(config, ModuleGeneratorScalar))
    code(importUtilities(config))

    const referenceAssignments: ReferenceAssignments = []

    for (const [kindName, nodes] of kinds) {
      code(Str.Code.TS.Comment.title1(kindName))
      code``
      if (nodes.length === 0) {
        code`// None of your ${kindName}s have custom scalars.`
      }
      for (const type of nodes) {
        const codeGenerator = kindRenders[kindName] as any
        code(codeGenerator({ config, type: type as any, referenceAssignments }))
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
    code`const $schemaDrivenDataMap: ${$.$$Utilities}.SchemaDrivenDataMap =`
    code(Str.Code.TS.TermObject.termObject({
      operations: kindMap.Root.map(type => {
        const operationType = rootsWithOpType.find(({ objectType }) => objectType.name === type.name)?.operationType
        if (!operationType) throw new Error(`Operation type not found for ${type.name}`)
        return [operationType, type.name] as const
      }),
      directives: {},
      types: Str.Code.TS.TermObject.directiveTermObject({
        $literal: kinds.map(([, _]) => _).flat().map((_) => _.name).join(`,\n`),
      }),
    }))
    code``
    code`export { $schemaDrivenDataMap as schemaDrivenDataMap }`
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
  ({ code, type }) => {
    code(Str.Code.TS.constDecl(type.name, `${$.$$Scalar}.${type.name}`))
  },
)

const ScalarTypeCustom = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.ScalarType }
>(
  ({ config, code, type }) => {
    if (config.options.isImportsCustomScalars) {
      code(Str.Code.TS.constDecl(type.name, `${$.$$Scalar}.${type.name}`))
    } else {
      code(Str.Code.TS.constDecl(type.name, Str.Code.TS.string(type.name)))
    }
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
      `${$.$$Utilities}.SchemaDrivenDataMap.OutputObject`,
      Str.Code.TS.TermObject.termObject({
        [propertyNames.f]: Str.Code.TS.TermObject.directiveTermObject({
          $spread: type.getTypes().filter(GraphqlKit.Schema.Scalars.Custom.isHasCustomScalars).map(memberType =>
            memberType.name + `.${propertyNames.f}`
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
      `${$.$$Utilities}.SchemaDrivenDataMap.OutputObject`,
      Str.Code.TS.TermObject.termObject({
        [propertyNames.f]: Str.Code.TS.TermObject.directiveTermObject({
          $spread: implementorTypes.filter(GraphqlKit.Schema.Scalars.Custom.isHasCustomScalars).map(memberType =>
            memberType.name + `.${propertyNames.f}`
          ),
        }),
      }),
    ))
  },
)

const ObjectType = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.ObjectType; referenceAssignments: ReferenceAssignments }
>(
  ({ config, code, type, referenceAssignments }) => {
    const o: Str.Code.TS.TermObject.TermObject = {}

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
    o[propertyNames.f] = of

    const condition = typeCondition(config)

    const outputFields = Object.values(type.getFields()).filter(condition)
    for (const outputField of outputFields) {
      const outputFieldNamedType = GraphqlKit.Schema.getNamedType(outputField.type)
      const sddmNodeOutputField: Str.Code.TS.TermObject.DirectiveTermObjectLike<Str.Code.TS.TermObject.TermObject> = {
        $fields: {},
      }
      of[outputField.name] = sddmNodeOutputField

      // Field Arguments
      const inputCondition = inputTypeCondition(config)
      const args = outputField.args.filter(inputCondition)
      if (args.length > 0) {
        const ofItemAs: Str.Code.TS.TermObject.TermObject = {}
        sddmNodeOutputField.$fields[propertyNames.a] = ofItemAs

        for (const arg of args) {
          const ofItemA: Str.Code.TS.TermObject.TermObject = {}
          ofItemAs[arg.name] = ofItemA

          const argType = GraphqlKit.Schema.getNamedType(arg.type)
          // dprint-ignore
          if (
             (config.runtimeFeatures.customScalars && GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(argType)) ||
             // For variables, we need to know the variable type to write it out, so we always need the named type.
             (config.runtimeFeatures.operationVariables)
          ) {
              ofItemA[propertyNames.nt] = argType.name
              // For variables, we need to know the variable type to write it out, so we always need the inline type.
              if (config.runtimeFeatures.operationVariables) {
                ofItemA[propertyNames.it] = renderInlineType(arg.type)
              }
            }
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
        if (GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(outputFieldNamedType)) {
          if (config.runtimeFeatures.customScalars) {
            sddmNodeOutputField.$fields[propertyNames.nt] = outputFieldNamedType.name
          }
        } else if (
          GraphqlKit.Schema.Runtime.Nodes.isUnionType(outputFieldNamedType)
          || GraphqlKit.Schema.Runtime.Nodes.isObjectType(outputFieldNamedType)
          || GraphqlKit.Schema.Runtime.Nodes.isInterfaceType(outputFieldNamedType)
        ) {
          referenceAssignments.push(`${type.name}.f[\`${outputField.name}\`]!.nt = ${outputFieldNamedType.name}`)
          // dprint-ignore
          sddmNodeOutputField.$literal = `// ${Str.Code.TS.TermObject.termField(propertyNames.nt, outputFieldNamedType.name)} <-- Assigned later to avoid potential circular dependency.`
          // // todo make kitchen sink schema have a pattern where this code path will be traversed.
          // // We just need to have arguments on a field on a nested object.
          // // Nested objects that in turn have custom scalar arguments
          // if (Schema.GraphqlKit.Schema2.Runtime.Nodes.isObjectType(fieldType) && Schema.isHasCustomScalars(fieldType)) {
          //   code(Str.Code.TS.TermObject.termField(field.name, fieldType.name))
          // }
        }
      }
    }

    code(
      Str.Code.TS.constDeclTyped(
        type.name,
        `${$.$$Utilities}.SchemaDrivenDataMap.OutputObject`,
        Str.Code.TS.TermObject.termObject(o),
      ),
    )
  },
)

const EnumType = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.EnumType; referenceAssignments: ReferenceAssignments }
>(
  ({ code, type }) => {
    code(Str.Code.TS.constDeclTyped(
      type.name,
      `${$.$$Utilities}.SchemaDrivenDataMap.Enum`,
      Str.Code.TS.TermObject.termObject({
        [propertyNames.k]: Str.Code.TS.string(`enum`),
        [propertyNames.n]: Str.Code.TS.string(type.name),
      }),
    ))
  },
)

const InputObjectType = createCodeGenerator<
  { type: GraphqlKit.Schema.Runtime.Nodes.ObjectType; referenceAssignments: ReferenceAssignments }
>(
  ({ config, code, type, referenceAssignments }) => {
    const o: Str.Code.TS.TermObject.TermObject = {}

    const inputFields = Object.values(type.getFields())

    if (config.runtimeFeatures.operationVariables) {
      o[propertyNames.n] = Str.Code.TS.string(type.name)
      const customScalarFields = inputFields
        .filter(GraphqlKit.Schema.Scalars.Custom.isHasCustomScalarInputs)
        .map(inputField => inputField.name)
        .map(Str.Code.TS.string)
      if (customScalarFields.length) {
        o[propertyNames.fcs] = Str.Code.TS.TermObject.termList(customScalarFields)
      }
    }
    const f: Str.Code.TS.TermObject.TermObjectOf<
      Str.Code.TS.TermObject.DirectiveTermObjectLike<Str.Code.TS.TermObject.TermObject>
    > = {}
    o[propertyNames.f] = f

    for (const inputField of inputFields) {
      const inputFieldType = GraphqlKit.Schema.getNamedType(inputField.type)

      // dprint-ignore
      const isPresent =
        config.runtimeFeatures.operationVariables ||
        (config.runtimeFeatures.customScalars &&
          (GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(inputFieldType) ||
          (GraphqlKit.Schema.Runtime.Nodes.isInputObjectType(inputFieldType) && GraphqlKit.Schema.Scalars.Custom.isHasCustomScalarInputs(inputFieldType))))

      if (!isPresent) continue

      f[inputField.name] = {
        $fields: {},
      }

      if (GraphqlKit.Schema.Scalars.isScalarTypeAndCustom(inputFieldType)) {
        f[inputField.name]!.$fields[propertyNames.nt] = inputFieldType.name
      } else if (
        GraphqlKit.Schema.Runtime.Nodes.isInputObjectType(inputFieldType)
        && GraphqlKit.Schema.Scalars.Custom.isHasCustomScalarInputs(inputFieldType)
      ) {
        referenceAssignments.push(
          `${type.name}.${propertyNames.f}![\`${inputField.name}\`]!.${propertyNames.nt} = ${inputFieldType.name}`,
        )
        f[inputField.name]!.$literal = `// ${
          Str.Code.TS.TermObject.termField(propertyNames.nt, inputFieldType.name)
        } <-- Assigned later to avoid potential circular dependency.`
      }
    }

    code(
      Str.Code.TS.constDeclTyped(
        type.name,
        `${$.$$Utilities}.SchemaDrivenDataMap.InputObject`,
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
