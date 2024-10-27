import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/__.js'
import { entries, isObjectEmpty, values } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/__.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { type CodeGenerator, createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { getTsDocContents, renderInlineType, renderName } from '../helpers/render.js'
import type { KindRenderers } from '../helpers/types.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorScalar } from './Scalar.js'

export const ModuleGeneratorSchema = createModuleGenerator(
  `Schema`,
  ({ config, code }) => {
    const kindMap = config.schema.kindMap.list
    const kinds = entries(kindMap)

    // todo methods root is unused
    code(`
      ${importModuleGenerator(config, ModuleGeneratorData)}
      ${importModuleGenerator(config, ModuleGeneratorScalar)}
      import type { Schema as $ } from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'
      import type * as ${identifiers.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'
    `)
    code()

    code(`export namespace ${identifiers.Schema} {`)

    for (const [kindName, kind] of kinds) {
      const renderer = kindRenderers[kindName] as CodeGenerator<{ type: Grafaid.Schema.Types }>
      code(Tex.title1(kindName))
      code()
      for (const type of kind) {
        code(Tex.title2(type.name))
        code()
        code(renderer({ config, type }))
        code()
      }
    }

    code(Tex.title1(`Named Types Index`))
    code()
    code(`
      /**
       * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
       *     name clashing between the field name and the object name.
       * 
       *     For example imagine \`Query.Foo\` field with type also called \`Foo\`. Our generated interfaces for each field
       *     would end up with an error of \`export interface Foo extends Foo ...\`
       */
    `)
    code()
    code(
      Code.tsNamespace(
        `$$NamedTypes`,
        kinds
          .map(([, type]) => type)
          .flat()
          .map((type) => {
            return Code.esmExport(Code.tsType(`$$${type.name}`, renderName(type)))
          }).join(`\n`),
      ),
    )
    code()

    code(`}`)
    code()

    code(SchemaGenerator({ config }))
  },
)

const OutputObject = createCodeGenerator<{ type: Grafaid.Schema.ObjectType }>(({ config, code, type }) => {
  const interfaceFields = Object.fromEntries(
    [[`__typename`, `${renderName(type)}.__typename`]].concat(
      values(type.getFields()).map((field) => {
        const name = field.name
        const fieldTypeReference = `${renderName(type.name)}.${renderName(field.name)}`
        return [name, fieldTypeReference]
      }),
    ),
  )
  code(Code.tsInterface({
    tsDoc: getTsDocContents(config, type),
    name: type.name,
    extends: `$.OutputObject`,
    block: {
      name: Code.string(type.name),
      fields: interfaceFields,
    },
  }))
  code()

  code(Code.esmExport(Code.tsNamespace(
    type.name,
    [Code.tsInterface({
      export: true,
      name: `__typename`,
      extends: `$.OutputField`,
      block: {
        name: Code.string(`__typename`),
        arguments: {},
        inlineType: `[1]`,
        namedType: {
          kind: Code.string(`__typename`),
          value: Code.string(type.name),
        },
      },
    })].concat(
      values(type.getFields())
        .map((field) => {
          const namedType = Grafaid.Schema.getNamedType(field.type)
          return Code.tsInterface({
            tsDoc: getTsDocContents(config, field),
            export: true,
            name: field.name,
            extends: `$.OutputField`,
            block: {
              name: Code.string(field.name),
              arguments: Object.fromEntries(field.args.map(arg => {
                return [
                  arg.name,
                  Code.objectField$({
                    tsDoc: getTsDocContents(config, arg),
                    value: {
                      kind: Code.string(`InputField`),
                      name: Code.string(arg.name),
                      inlineType: renderInlineType(arg.type),
                      namedType: namedTypesTypeReference(Grafaid.Schema.getNamedType(arg.type)),
                    },
                  }),
                ]
              })),
              inlineType: renderInlineType(field.type),
              namedType: namedTypesTypeReference(namedType),
            },
          })
        }),
    )
      .join(`\n\n`),
  )))
  code()
})

const Enum = createCodeGenerator<{ type: Grafaid.Schema.EnumType }>(({ config, code, type }) => {
  code(
    Code.tsInterface({
      tsDoc: getTsDocContents(config, type),
      export: true,
      name: type.name,
      extends: `$.Enum`,
      block: {
        name: Code.string(type.name),
        members: Code.tsTuple(type.getValues().map((_) => Code.string(_.name))),
        membersUnion: Code.tsUnionItems(type.getValues().map((_) => Code.string(_.name))),
      },
    }),
  )
  code()
})
const InputObject = createCodeGenerator<{ type: Grafaid.Schema.InputObjectType }>(({ config, code, type }) => {
  code(
    Code.tsInterface({
      tsDoc: getTsDocContents(config, type),
      name: type.name,
      extends: `$.InputObject`,
      block: {
        name: Code.string(type.name),
        isAllFieldsNullable: Code.boolean(Grafaid.Schema.isAllInputObjectFieldsNullable(type)),
        fields: Object.fromEntries(
          values(type.getFields()).map(field => {
            return [field.name, `${renderName(type)}.${renderName(field)}`]
          }),
        ),
      },
    }),
  )
  code()
  code(Code.esmExport(Code.tsNamespace(
    type.name,
    values(type.getFields())
      .map((field) => {
        const namedType = Grafaid.Schema.getNamedType(field.type)
        return Code.tsInterface({
          tsDoc: getTsDocContents(config, field),
          name: field.name,
          extends: `$.InputField`,
          block: {
            name: Code.string(field.name),
            inlineType: renderInlineType(field.type),
            namedType: namedTypesTypeReference(namedType),
          },
        })
      })
      .join(`\n\n`),
  )))
  code()
})

const ScalarStandard = createCodeGenerator<{ type: Grafaid.Schema.ScalarType }>(({ code, type }) => {
  code(Code.esmExport(Code.tsType(type.name, `$.StandardTypes.${type.name}`)))
  code()
})

const ScalarCustom = createCodeGenerator<{ type: Grafaid.Schema.ScalarType }>(({ code, type }) => {
  code(Code.esmExport(Code.tsType(type.name, `$$Scalar.${type.name}`)))
  code()
})

const Union = createCodeGenerator<{ type: Grafaid.Schema.UnionType }>(({ config, code, type }) => {
  const memberNames = type.getTypes().map((_) => renderName(_))
  code(Code.tsInterface({
    tsDoc: getTsDocContents(config, type),
    export: true,
    name: type.name,
    extends: `$.Union`,
    block: {
      name: Code.string(type.name),
      members: Code.tsTuple(memberNames),
      membersUnion: Code.tsUnionItems(memberNames),
      membersIndex: Object.fromEntries(memberNames.map(n => [n, renderName(n)])),
    },
  }))
  code()
})

const Interface = createCodeGenerator<{ type: Grafaid.Schema.InterfaceType }>(({ config, code, type }) => {
  const implementorTypes = Grafaid.Schema.KindMap.getInterfaceImplementors(config.schema.kindMap, type)
  const implementorNames = implementorTypes.map((_) => _.name)
  code(Code.tsInterface({
    tsDoc: getTsDocContents(config, type),
    name: type.name,
    extends: `$.Interface`,
    block: {
      name: Code.string(type.name),
      implementors: Code.tsTuple(implementorNames),
      implementorsUnion: Code.tsUnionItems(implementorNames),
      implementorsIndex: Object.fromEntries(implementorNames.map(n => [n, renderName(n)])),
    },
  }))
  code()
})

const kindRenderers = {
  Root: OutputObject,
  OutputObject,
  Union,
  Interface,
  Enum,
  InputObject,
  ScalarStandard,
  ScalarCustom,
} satisfies KindRenderers

const namedTypesTypeReference = (name: string | Grafaid.Schema.NamedTypes) => {
  const name_ = typeof name === `string` ? name : name.name
  return `$$NamedTypes.$$${name_}`
}

export const SchemaGenerator = createCodeGenerator(
  ({ config, code }) => {
    const kindMap = config.schema.kindMap
    // dprint-ignore
    const root = kindMap.list.Root.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const objects = kindMap.list.OutputObject.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const unions = kindMap.list.Union.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const interfaces = kindMap.list.Interface.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const enums = kindMap.list.Enum.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const operationsAvailable = entries(kindMap.index.Root).filter(_ => _[1] !== null).map(_ => _[0])
    const schema: Code.TermObject = {
      name: `$$Data.Name`,
      operationsAvailable: Code.tsTuple(operationsAvailable.map(_ => Code.string(_))),
      RootUnion: Code.tsUnionItems(kindMap.list.Root.map(_ => `${identifiers.Schema}.${_.name}`)),
      Root: {
        [Grafaid.Document.OperationTypeNode.QUERY]: kindMap.index.Root.query?.name
          ? `${identifiers.Schema}.${kindMap.index.Root.query.name}`
          : null,
        [Grafaid.Document.OperationTypeNode.MUTATION]: kindMap.index.Root.mutation?.name
          ? `${identifiers.Schema}.${kindMap.index.Root.mutation.name}`
          : null,
        [Grafaid.Document.OperationTypeNode.SUBSCRIPTION]: kindMap.index.Root.subscription?.name
          ? `${identifiers.Schema}.${kindMap.index.Root.subscription.name}`
          : null,
      },
      allTypes: Object.fromEntries([
        ...root,
        ...enums,
        ...objects,
        ...unions,
        ...interfaces,
      ]),
      objects: Object.fromEntries(objects),
      unions: Object.fromEntries(unions),
      interfaces: Object.fromEntries(interfaces),
      scalars: `$Scalars`,
      extensions: `${identifiers.$$Utilities}.GlobalRegistry.TypeExtensions`,
    }

    // --- Extensions ---
    // If the extensions object is populated it will override the default generic type.

    const extensions: Code.TermObject = {}

    config.extensions.forEach(_ => {
      _.onSchema?.({ config, schema: extensions })
    })
    if (!isObjectEmpty(extensions)) {
      schema[`extensions`] = extensions
    }

    // ---

    code(Tex.title1(`Schema`))
    code()
    code(
      Code.tsInterface({
        name: identifiers.Schema,
        parameters:
          `$Scalars extends ${identifiers.$$Utilities}.Schema.Scalar.Registry = ${identifiers.$$Utilities}.Schema.Scalar.Registry.Empty`,
        extends: `$`,
        block: schema,
      }),
    )
  },
)
