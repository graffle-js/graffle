import { isUnionType } from 'graphql'
import { Code } from '../../../lib/Code.js'
import { hasMutation, hasQuery, hasSubscription, unwrapToNamed } from '../../../lib/graphql.js'
import { createCodeGenerator } from '../createCodeGenerator.js'
import { moduleNameData } from './Data.js'
import { moduleNameSchemaBuildtime } from './SchemaBuildtime.js'

export const { generate: generateSchemaIndex, moduleName: moduleNameSchemaIndex } = createCodeGenerator(
  `SchemaIndex`,
  (config) => {
    const SchemaBuildtimeNamespace = `Schema`
    const code = []
    code.push(`/* eslint-disable */\n`)
    code.push(`import type * as Data from './${moduleNameData}.js'\n`)
    code.push(`import type * as ${SchemaBuildtimeNamespace} from './${moduleNameSchemaBuildtime}.js'\n`)

    const rootTypesPresence = {
      Query: hasQuery(config.typeMapByKind),
      Mutation: hasMutation(config.typeMapByKind),
      Subscription: hasSubscription(config.typeMapByKind),
    }

    const rootTypesPresent = Object.entries(rootTypesPresence).filter(([_, present]) => present !== undefined).map((
      [_],
    ) => _)

    code.push(Code.export$(
      Code.interface$(
        `Index`,
        Code.objectFrom({
          name: `Data.Name`,
          RootTypesPresent: `[${rootTypesPresent.map((_) => Code.quote(_)).join(`, `)}]`,
          RootUnion: rootTypesPresent.map(_ => `${SchemaBuildtimeNamespace}.Root.${_}`).join(`|`),
          Root: {
            type: Code.objectFrom({
              Query: rootTypesPresence.Query ? `${SchemaBuildtimeNamespace}.Root.Query` : null,
              Mutation: rootTypesPresence.Mutation ? `${SchemaBuildtimeNamespace}.Root.Mutation` : null,
              Subscription: rootTypesPresence.Subscription ? `${SchemaBuildtimeNamespace}.Root.Subscription` : null,
            }),
          },
          objects: Code.objectFromEntries(
            config.typeMapByKind.GraphQLObjectType.map(_ => [_.name, `${SchemaBuildtimeNamespace}.Object.${_.name}`]),
          ),
          unions: Code.objectFromEntries(
            config.typeMapByKind.GraphQLUnionType.map(_ => [_.name, `${SchemaBuildtimeNamespace}.Union.${_.name}`]),
          ),
          interfaces: Code.objectFromEntries(
            config.typeMapByKind.GraphQLInterfaceType.map(
              _ => [_.name, `${SchemaBuildtimeNamespace}.Interface.${_.name}`],
            ),
          ),
          // todo jsdoc comment saying:
          // Objects that match this pattern name: /.../
          error: Code.objectFrom({
            objects: Code.objectFromEntries(
              config.error.objects.map(_ => [_.name, `${SchemaBuildtimeNamespace}.Object.${_.name}`]),
            ),
            objectsTypename: Code.objectFromEntries(
              config.error.objects.map(_ => [_.name, `{ __typename: "${_.name}" }`]),
            ),
            rootResultFields: `{
          ${
              Object.entries(config.rootTypes).map(([rootTypeName, rootType]) => {
                if (!rootType) return `${rootTypeName}: {}`

                const resultFields = Object.values(rootType.getFields()).filter((field) => {
                  const type = unwrapToNamed(field.type)
                  return isUnionType(type)
                    && type.getTypes().some(_ => config.error.objects.some(__ => __.name === _.name))
                }).map((field) => field.name)

                return `${rootType.name}: {\n${resultFields.map(_ => `${_}: "${_}"`).join(`,\n`)} }`
              }).join(`\n`)
            }
          }`,
          }),
        }),
      ),
    ))

    return code.join(`\n`)
  },
)
