import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/__.js'
import { entries, isObjectEmpty, values } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/__.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { type CodeGenerator, createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { getTsDocContents, renderInlineType, renderName } from '../helpers/render.js'
import type { KindRenderers } from '../helpers/types.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorMethodsRoot } from './MethodsRoot.js'
import { ModuleGeneratorScalar } from './Scalar.js'

export const ModuleGeneratorSchema = createModuleGenerator(
  `Schema`,
  ({ config, code }) => {
    const kindMap = config.schema.kindMap
    const kinds = entries(kindMap)

    // todo methods root is unused
    code(`
      import type * as Data from './${ModuleGeneratorData.name}.js'
      import type * as ${identifiers.MethodsRoot} from './${ModuleGeneratorMethodsRoot.name}.js'
      import type { Schema as $ } from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'
      import type * as ${identifiers.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'
      import type * as $Scalar from './${ModuleGeneratorScalar.name}.js'
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
  code(Code.tsInterface$({
    tsDoc: getTsDocContents(config, type),
    name: type.name,
    extends: `$.OutputObject`,
    fields: {
      name: Code.string(type.name),
      fields: interfaceFields,
    },
  }))
  code()

  code(Code.esmExport(Code.tsNamespace(
    type.name,
    [Code.tsInterface$({
      export: true,
      name: `__typename`,
      extends: `$.OutputField`,
      fields: {
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
          return Code.tsInterface$({
            tsDoc: getTsDocContents(config, field),
            export: true,
            name: field.name,
            extends: `$.OutputField`,
            fields: {
              name: Code.string(field.name),
              arguments: Object.fromEntries(field.args.map(arg => {
                return [
                  arg.name,
                  Code.directiveField({
                    $TS_DOC: getTsDocContents(config, arg),
                    $VALUE: {
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
    Code.tsInterface$({
      tsDoc: getTsDocContents(config, type),
      export: true,
      name: type.name,
      extends: `$.Enum`,
      fields: {
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
    Code.tsInterface$({
      tsDoc: getTsDocContents(config, type),
      name: type.name,
      extends: `$.InputObject`,
      fields: {
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
        return Code.tsInterface$({
          tsDoc: getTsDocContents(config, field),
          name: field.name,
          extends: `$.InputField`,
          fields: {
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
  code(Code.esmExport(Code.tsType(type.name, `$Scalar.${type.name}`)))
  code()
})

const Union = createCodeGenerator<{ type: Grafaid.Schema.UnionType }>(({ config, code, type }) => {
  const memberNames = type.getTypes().map((_) => renderName(_))
  code(Code.tsInterface$({
    tsDoc: getTsDocContents(config, type),
    export: true,
    name: type.name,
    extends: `$.Union`,
    fields: {
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
  code(Code.tsInterface$({
    tsDoc: getTsDocContents(config, type),
    name: type.name,
    extends: `$.Interface`,
    fields: {
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
    code(Tex.title1(`Schema`))
    code()

    const rootTypesPresence = {
      Query: Grafaid.Schema.KindMap.hasQuery(config.schema.kindMap),
      Mutation: Grafaid.Schema.KindMap.hasMutation(config.schema.kindMap),
      Subscription: Grafaid.Schema.KindMap.hasSubscription(config.schema.kindMap),
    }

    const root = config.schema.kindMap.Root.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const objects = config.schema.kindMap.OutputObject.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const unions = config.schema.kindMap.Union.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const interfaces = config.schema.kindMap.Interface.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const enums = config.schema.kindMap.Enum.map(_ => [_.name, `${identifiers.Schema}.${_.name}`])
    const schema: Code.TermObject = {
      name: `Data.Name`,
      RootTypesPresent: `[${config.schema.kindMap.Root.map((_) => Code.string(_.name)).join(`, `)}]`,
      RootUnion: config.schema.kindMap.Root.map(_ => `${identifiers.Schema}.${_.name}`)
        .join(`|`),
      Root: {
        Query: rootTypesPresence.Query ? `${identifiers.Schema}.Query` : null,
        Mutation: rootTypesPresence.Mutation ? `${identifiers.Schema}.Mutation` : null,
        Subscription: rootTypesPresence.Subscription ? `${identifiers.Schema}.Subscription` : null,
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

    code(
      Code.tsInterface$({
        name: identifiers.Schema,
        typeParameters:
          `$Scalars extends ${identifiers.$$Utilities}.Schema.Scalar.Registry = ${identifiers.$$Utilities}.Schema.Scalar.Registry.Empty`,
        extends: `$`,
        fields: schema,
      }),
    )
  },
)
