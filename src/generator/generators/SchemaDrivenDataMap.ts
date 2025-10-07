import { Grafaid } from '#lib/grafaid'
import { Tex } from '#lib/tex'
import { Code } from '#src/lib/Code.js'
import { propertyNames } from '#src/types/SchemaDrivenDataMap/SchemaDrivenDataMap.js'
import { Obj } from '@wollybeard/kit'
import type { Config } from '../config/config.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { importUtilities } from '../helpers/pathHelpers.js'
import { renderInlineType, renderName } from '../helpers/render.js'
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
    const kindMap: Grafaid.Schema.KindMap['list'] = getKindMap(config)
    const kinds = Obj.entries(kindMap)

    code(importModuleGenerator(config, ModuleGeneratorScalar))
    code(importUtilities(config))

    const referenceAssignments: ReferenceAssignments = []

    for (const [kindName, nodes] of kinds) {
      code(Tex.title1(kindName))
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

    code(Tex.title1(`Reference Assignments`, `(avoids circular assignment issues)`))
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

    code(Tex.title1(`Index`))
    code``
    code`const $schemaDrivenDataMap: ${$.$$Utilities}.SchemaDrivenDataMap =`
    code(Code.termObject({
      operations: kindMap.Root.map(type => {
        const operationType = rootsWithOpType.find(({ objectType }) => objectType.name === type.name)?.operationType
        if (!operationType) throw new Error(`Operation type not found for ${type.name}`)
        return [operationType, type.name] as const
      }),
      directives: {},
      types: Code.directiveTermObject({
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
    return Grafaid.Schema.CustomScalars.isHasCustomScalars
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
    return Grafaid.Schema.CustomScalars.isHasCustomScalars
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
  { type: Grafaid.Schema.ScalarType }
>(
  ({ code, type }) => {
    code(Code.termConst(type.name, `${$.$$Scalar}.${type.name}`))
  },
)

const ScalarTypeCustom = createCodeGenerator<
  { type: Grafaid.Schema.ScalarType }
>(
  ({ config, code, type }) => {
    if (config.options.isImportsCustomScalars) {
      code(Code.termConst(type.name, `${$.$$Scalar}.${type.name}`))
    } else {
      code(Code.termConst(type.name, Code.string(type.name)))
    }
  },
)

const UnionType = createCodeGenerator<
  { type: Grafaid.Schema.UnionType; referenceAssignments: ReferenceAssignments }
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
    code(Code.termConstTyped(
      type.name,
      `${$.$$Utilities}.SchemaDrivenDataMap.OutputObject`,
      Code.termObject({
        [propertyNames.f]: Code.directiveTermObject({
          $spread: type.getTypes().filter(Grafaid.Schema.CustomScalars.isHasCustomScalars).map(memberType =>
            memberType.name + `.${propertyNames.f}`
          ),
        }),
      }),
    ))
  },
)

const InterfaceType = createCodeGenerator<
  { type: Grafaid.Schema.InterfaceType; referenceAssignments: ReferenceAssignments }
>(
  ({ code, type, config }) => {
    const implementorTypes = Grafaid.Schema.KindMap.getInterfaceImplementors(config.schema.kindMap, type)
    code(Code.termConstTyped(
      type.name,
      `${$.$$Utilities}.SchemaDrivenDataMap.OutputObject`,
      Code.termObject({
        [propertyNames.f]: Code.directiveTermObject({
          $spread: implementorTypes.filter(Grafaid.Schema.CustomScalars.isHasCustomScalars).map(memberType =>
            memberType.name + `.${propertyNames.f}`
          ),
        }),
      }),
    ))
  },
)

const ObjectType = createCodeGenerator<
  { type: Grafaid.Schema.ObjectType; referenceAssignments: ReferenceAssignments }
>(
  ({ config, code, type, referenceAssignments }) => {
    const o: Code.TermObject = {}

    config.extensions.forEach(_ => {
      _.schemaDrivenDataMap?.onObjectType?.({
        config,
        sddmNode: o,
        graphqlType: type,
      })
    })

    // Fields of this object.
    // ---------------------
    const of: Code.TermObject = {}
    o[propertyNames.f] = of

    const condition = typeCondition(config)

    const outputFields = Object.values(type.getFields()).filter(condition)
    for (const outputField of outputFields) {
      const outputFieldNamedType = Grafaid.Schema.getNamedType(outputField.type)
      const sddmNodeOutputField: Code.DirectiveTermObjectLike<Code.TermObject> = {
        $fields: {},
      }
      of[outputField.name] = sddmNodeOutputField

      // Field Arguments
      const inputCondition = inputTypeCondition(config)
      const args = outputField.args.filter(inputCondition)
      if (args.length > 0) {
        const ofItemAs: Code.TermObject = {}
        sddmNodeOutputField.$fields[propertyNames.a] = ofItemAs

        for (const arg of args) {
          const ofItemA: Code.TermObject = {}
          ofItemAs[arg.name] = ofItemA

          const argType = Grafaid.Schema.getNamedType(arg.type)
          // dprint-ignore
          if (
             (config.runtimeFeatures.customScalars && Grafaid.Schema.isScalarTypeAndCustom(argType)) ||
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
        if (Grafaid.Schema.isScalarTypeAndCustom(outputFieldNamedType)) {
          if (config.runtimeFeatures.customScalars) {
            sddmNodeOutputField.$fields[propertyNames.nt] = outputFieldNamedType.name
          }
        } else if (
          Grafaid.Schema.isUnionType(outputFieldNamedType) || Grafaid.Schema.isObjectType(outputFieldNamedType)
          || Grafaid.Schema.isInterfaceType(outputFieldNamedType)
        ) {
          referenceAssignments.push(`${type.name}.f[\`${outputField.name}\`]!.nt = ${outputFieldNamedType.name}`)
          // dprint-ignore
          sddmNodeOutputField.$literal = `// ${Code.termField(propertyNames.nt, outputFieldNamedType.name)} <-- Assigned later to avoid potential circular dependency.`
          // // todo make kitchen sink schema have a pattern where this code path will be traversed.
          // // We just need to have arguments on a field on a nested object.
          // // Nested objects that in turn have custom scalar arguments
          // if (Schema.isObjectType(fieldType) && Schema.isHasCustomScalars(fieldType)) {
          //   code(Code.termField(field.name, fieldType.name))
          // }
        }
      }
    }

    code(
      Code.termConstTyped(type.name, `${$.$$Utilities}.SchemaDrivenDataMap.OutputObject`, Code.termObject(o)),
    )
  },
)

const EnumType = createCodeGenerator<
  { type: Grafaid.Schema.EnumType; referenceAssignments: ReferenceAssignments }
>(
  ({ code, type }) => {
    code(Code.termConstTyped(
      type.name,
      `${$.$$Utilities}.SchemaDrivenDataMap.Enum`,
      Code.termObject({
        [propertyNames.k]: Code.string(`enum`),
        [propertyNames.n]: Code.string(type.name),
      }),
    ))
  },
)

const InputObjectType = createCodeGenerator<
  { type: Grafaid.Schema.ObjectType; referenceAssignments: ReferenceAssignments }
>(
  ({ config, code, type, referenceAssignments }) => {
    const o: Code.TermObject = {}

    const inputFields = Object.values(type.getFields())

    if (config.runtimeFeatures.operationVariables) {
      o[propertyNames.n] = Code.string(type.name)
      const customScalarFields = inputFields
        .filter(Grafaid.Schema.CustomScalars.isHasCustomScalarInputs)
        .map(inputField => inputField.name)
        .map(Code.string)
      if (customScalarFields.length) {
        o[propertyNames.fcs] = Code.termList(customScalarFields)
      }
    }
    const f: Code.TermObjectOf<Code.DirectiveTermObjectLike<Code.TermObject>> = {}
    o[propertyNames.f] = f

    for (const inputField of inputFields) {
      const inputFieldType = Grafaid.Schema.getNamedType(inputField.type)

      // dprint-ignore
      const isPresent =
        config.runtimeFeatures.operationVariables ||
        (config.runtimeFeatures.customScalars &&
          (Grafaid.Schema.isScalarTypeAndCustom(inputFieldType) ||
          (Grafaid.Schema.isInputObjectType(inputFieldType) && Grafaid.Schema.CustomScalars.isHasCustomScalarInputs(inputFieldType))))

      if (!isPresent) continue

      f[inputField.name] = {
        $fields: {},
      }

      if (Grafaid.Schema.isScalarTypeAndCustom(inputFieldType)) {
        f[inputField.name]!.$fields[propertyNames.nt] = inputFieldType.name
      } else if (
        Grafaid.Schema.isInputObjectType(inputFieldType)
        && Grafaid.Schema.CustomScalars.isHasCustomScalarInputs(inputFieldType)
      ) {
        referenceAssignments.push(
          `${type.name}.${propertyNames.f}![\`${inputField.name}\`]!.${propertyNames.nt} = ${inputFieldType.name}`,
        )
        f[inputField.name]!.$literal = `// ${
          Code.termField(propertyNames.nt, inputFieldType.name)
        } <-- Assigned later to avoid potential circular dependency.`
      }
    }

    code(
      Code.termConstTyped(type.name, `${$.$$Utilities}.SchemaDrivenDataMap.InputObject`, Code.termObject(o)),
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
