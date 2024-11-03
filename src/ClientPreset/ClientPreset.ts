import type { CamelCase } from 'type-fest'
import type {
  Extension,
  ExtensionConstructor,
  ExtensionInputParametersNone,
  ExtensionInputParametersOptional,
  ExtensionInputParametersRequired,
  InferExtensionFromConstructor,
} from '../extension/extension.js'
import type { UseExtensionDo } from '../layers/6_client/builderExtensions/use.js'
import { type Client, createWithContext } from '../layers/6_client/client.js'
import { type Context, createContext, type TypeHooksEmpty } from '../layers/6_client/context.js'
import type { InputBase } from '../layers/6_client/Settings/Input.js'
import type { NormalizeInput } from '../layers/6_client/Settings/InputToConfig.js'
import type { Builder } from '../lib/builder/__.js'
import type { ConfigManager } from '../lib/config-manager/__.js'
import { type mergeArrayOfObjects, type ToParametersExact } from '../lib/prelude.js'
import type { GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../types/Schema/__.js'
import type { SchemaDrivenDataMap } from '../types/SchemaDrivenDataMap/__.js'

/**
 * Create a Client constructor with some initial context.
 *
 * Extensions constructors can be given. Their constructor parameters will
 * be merged into the client constructor under a key matching the name of the extension.
 */
export const create: CreatePrefilled = (args) => {
  const constructor = (input: any) => { // todo generic input type
    const extensions = args.extensions?.map(extCtor => {
      const extCtor_: (args: object | undefined) => Extension = extCtor
      const keywordArgs: undefined | object = input?.[extCtor.info.name]
      return extCtor_(keywordArgs)
    }) ?? []

    const scalars = args.scalars ?? Schema.Scalar.Registry.empty
    const schemaMap = args.sddm ?? null

    const initialState = createContext({
      name: args.name,
      extensions,
      scalars,
      schemaMap,
      input: {
        schema: args.schemaUrl,
        // eslint-disable-next-line
        // @ts-ignore passes after generation
        ...input,
        name: args.name,
      },
      // retry: null,
    })

    const instance = createWithContext(initialState)

    return instance
  }

  return constructor as any
}

// dprint-ignore
type CreatePrefilled = <
  const $Name extends string,
  $Scalars extends Schema.Scalar.Registry,
  const $ExtensionConstructors extends [...ExtensionConstructor<any>[]],
  $Params extends {
    name: $Name
    sddm?: SchemaDrivenDataMap
    scalars?: $Scalars
    schemaUrl?: URL | undefined
    extensions?: $ExtensionConstructors
  },
>(keywordArgs: $Params) =>
  {
    preset: $Params
    <$ClientKeywordArgs extends ConstructorParameters<$Name, ConfigManager.OrDefault<$Params['extensions'], []>>>(
      ...args: ToParametersExact<
                  $ClientKeywordArgs,
                  ConstructorParameters<$Name, ConfigManager.OrDefault<$Params['extensions'], []>>
                >
    ): ApplyPrefilledExtensions<
      ConfigManager.OrDefault<$Params['extensions'], []>,
      // @ts-expect-error fixme
      Client<{
        input: $ClientKeywordArgs
        name: $Params['name']
        schemaMap: ConfigManager.OrDefault<$Params['sddm'], null>
        scalars: ConfigManager.OrDefault<$Params['scalars'], Schema.Scalar.Registry.Empty>
        config: NormalizeInput<$ClientKeywordArgs & { name: $Name; schemaMap: SchemaDrivenDataMap }>
        typeHooks: TypeHooksEmpty
        // This will be populated by statically applying preset extensions.
        extensions: []
        // retry: null
      }>
    >
  }

type ConstructorParameters<
  $Name extends string,
  $Extensions extends [...ExtensionConstructor[]],
> =
  & InputBase<GlobalRegistry.GetOrGeneric<$Name>>
  & mergeArrayOfObjects<GetParametersContributedByExtensions<$Extensions>>

// dprint-ignore
type GetParametersContributedByExtensions<Extensions extends [...ExtensionConstructor[]]> = {
  [$Index in keyof Extensions]:
    Extensions[$Index]['info']['configInputParameters'] extends ExtensionInputParametersNone     ? {} :
    Extensions[$Index]['info']['configInputParameters'] extends ExtensionInputParametersRequired ? { [_ in CamelCase<Extensions[$Index]['info']['name']>]: Extensions[$Index]['info']['configInputParameters'][0] } :
    Extensions[$Index]['info']['configInputParameters'] extends ExtensionInputParametersOptional ? { [_ in CamelCase<Extensions[$Index]['info']['name']>]?: Extensions[$Index]['info']['configInputParameters'][0] } :
                                                                                                   {}
}

// dprint-ignore
type ApplyPrefilledExtensions<
  $ExtensionConstructors extends [...ExtensionConstructor[]],
  $Client extends Client<Context>,
> =
  $ExtensionConstructors extends []
  ? $Client
  : $ExtensionConstructors extends [infer $ExtensionConstructor extends ExtensionConstructor, ...infer $Rest extends ExtensionConstructor[]]
    ? ApplyPrefilledExtensions<
        $Rest,
        // @ts-expect-error fixme
        UseExtensionDo<
          Builder.Private.Get<$Client>,
          InferExtensionFromConstructor<$ExtensionConstructor>
        >
      >
    : never
