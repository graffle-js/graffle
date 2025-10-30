import * as $$Utilities from '#graffle/utilities-for-generated';
import * as $$Domains from './domains/$$.js';
import * as $$Scalar from './scalar.js';
/**
 * Create a Graffle client for the possible GraphQL schema.
 *
 * Pre-configured with:
 * - HTTP transport to {@link $$Data.defaultSchemaUrl}
 * - Document builder for type-safe queries
 * - Schema-driven data mapping
 * - Custom scalar codecs
 * - GraphQL string parsing via integrated type system
 *
 * @param input - Optional client configuration to override defaults
 *
 * @example
 * ```ts
 * import { create } from './graffle/client.js'
 *
 * const client = create()
 * const result = await client.query.pokemon({ name: true })
 * ```
 */
export declare const create: import("../../../../../../../build/client/client.js").Create<$$Utilities.Scalars.Set<{
    readonly properties: {
        static: {};
        $computedTypeFunctions: readonly [import("../../../../../../../build/exports/index.js").DocumentBuilderProperties];
        computed: readonly $$Utilities.GraffleKit.Context.Properties.PropertiesComputer<$$Utilities.Context, object, {
            readonly output: $$Utilities.Configuration.ConfigurationNamespace<$$Utilities.Configuration.Output.Configurator>;
            readonly check: $$Utilities.Configuration.ConfigurationNamespace<$$Utilities.Configuration.Check.Configurator>;
            readonly schema: $$Utilities.Configuration.ConfigurationNamespace<$$Utilities.Configuration.Schema.Configurator>;
        }>[];
    };
    readonly transports: {
        readonly configurations: {
            readonly http: import("../../../../../../../build/exports/index.js").ConfigurationInputResolver$Func_<{
                current: {
                    methodMode: "post";
                };
                input: {
                    url: undefined;
                };
            }, {
                url: undefined;
            }, {
                methodMode: "post";
            }>;
        };
        readonly current: "http";
        readonly registry: Readonly<{}> & {
            readonly http: $$Utilities.Transports.Transport.Data<"http", import("@wollybeard/kit/configurator").Configurator<import("../../../../../../../build/exports/index.js").ConfigurationInput, import("../../../../../../../build/exports/index.js").ConfigurationNormalized, {
                methodMode: "post";
            }, import("@wollybeard/kit/configurator").InputResolverGeneric<import("../../../../../../../build/exports/index.js").ConfigurationInputResolver$Func>>, import("@wollybeard/kit/ware").StepDefinition<"pack", {
                searchParams: (request: import("../../../../../../../build/exports/index.js").RequestConfig) => Record<string, string>;
                body: (input: import("../../../../../../../build/exports/index.js").RequestConfig) => BodyInit;
            }, {
                transportType: "http";
                transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
            } & import("../../../../../../../build/requestPipeline/RequestPipeline.js").RequestPipeline.EncodeOutput, {
                request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
                transportType: "http";
                transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
                state: import("../../../../../../../build/context/context.js").Context;
            }>, import("@wollybeard/kit/ware").StepDefinition<"exchange", {
                fetch: (url: string | URL, init?: RequestInit) => import("@wollybeard/kit/prom").Maybe<Response>;
            }, {
                transportType: "http";
                transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
            } & {
                request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
                transportType: "http";
                transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
                state: import("../../../../../../../build/context/context.js").Context;
            }, Promise<{
                response: Response;
                transportType: "http";
                transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
                request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
                state: import("../../../../../../../build/context/context.js").Context;
            }>>, import("@wollybeard/kit/ware").StepDefinition<"unpack", {}, {
                transportType: "http";
                transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
            } & {
                response: Response;
                transportType: "http";
                transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
                request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
                state: import("../../../../../../../build/context/context.js").Context;
            }, Promise<{
                result: import("graphql").FormattedExecutionResult<import("graphql/jsutils/ObjMap.js").ObjMap<unknown>, import("graphql/jsutils/ObjMap.js").ObjMap<unknown>>;
                transportType: "http";
                transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
                response: Response;
                request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
                state: import("../../../../../../../build/context/context.js").Context;
            }>>>;
        };
    };
    readonly requestPipelineDefinition: import("@wollybeard/kit/ware").Updaters.AddOverloadMany<import("../../../../../../../build/requestPipeline/RequestPipeline.js").RequestPipeline.BaseDefinitionEmpty, readonly [$$Utilities.Transports.Transport.Data<"http", import("@wollybeard/kit/configurator").Configurator<import("../../../../../../../build/exports/index.js").ConfigurationInput, import("../../../../../../../build/exports/index.js").ConfigurationNormalized, {
        methodMode: "post";
    }, import("@wollybeard/kit/configurator").InputResolverGeneric<import("../../../../../../../build/exports/index.js").ConfigurationInputResolver$Func>>, import("@wollybeard/kit/ware").StepDefinition<"pack", {
        searchParams: (request: import("../../../../../../../build/exports/index.js").RequestConfig) => Record<string, string>;
        body: (input: import("../../../../../../../build/exports/index.js").RequestConfig) => BodyInit;
    }, {
        transportType: "http";
        transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
    } & import("../../../../../../../build/requestPipeline/RequestPipeline.js").RequestPipeline.EncodeOutput, {
        request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
        transportType: "http";
        transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
        state: import("../../../../../../../build/context/context.js").Context;
    }>, import("@wollybeard/kit/ware").StepDefinition<"exchange", {
        fetch: (url: string | URL, init?: RequestInit) => import("@wollybeard/kit/prom").Maybe<Response>;
    }, {
        transportType: "http";
        transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
    } & {
        request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
        transportType: "http";
        transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
        state: import("../../../../../../../build/context/context.js").Context;
    }, Promise<{
        response: Response;
        transportType: "http";
        transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
        request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
        state: import("../../../../../../../build/context/context.js").Context;
    }>>, import("@wollybeard/kit/ware").StepDefinition<"unpack", {}, {
        transportType: "http";
        transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
    } & {
        response: Response;
        transportType: "http";
        transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
        request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
        state: import("../../../../../../../build/context/context.js").Context;
    }, Promise<{
        result: import("graphql").FormattedExecutionResult<import("graphql/jsutils/ObjMap.js").ObjMap<unknown>, import("graphql/jsutils/ObjMap.js").ObjMap<unknown>>;
        transportType: "http";
        transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
        response: Response;
        request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
        state: import("../../../../../../../build/context/context.js").Context;
    }>>>]>;
    readonly extensions: [{
        readonly configurator: undefined;
        readonly configuratorInitialInput: unknown;
        readonly requestInterceptor: undefined;
        readonly requestInterceptorsComputed: readonly [];
        readonly noExpandResultDataType: undefined;
        readonly transports: [$$Utilities.Transports.Transport.Data<"http", import("@wollybeard/kit/configurator").Configurator<import("../../../../../../../build/exports/index.js").ConfigurationInput, import("../../../../../../../build/exports/index.js").ConfigurationNormalized, {
            methodMode: "post";
        }, import("@wollybeard/kit/configurator").InputResolverGeneric<import("../../../../../../../build/exports/index.js").ConfigurationInputResolver$Func>>, import("@wollybeard/kit/ware").StepDefinition<"pack", {
            searchParams: (request: import("../../../../../../../build/exports/index.js").RequestConfig) => Record<string, string>;
            body: (input: import("../../../../../../../build/exports/index.js").RequestConfig) => BodyInit;
        }, {
            transportType: "http";
            transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
        } & import("../../../../../../../build/requestPipeline/RequestPipeline.js").RequestPipeline.EncodeOutput, {
            request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
            transportType: "http";
            transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
            state: import("../../../../../../../build/context/context.js").Context;
        }>, import("@wollybeard/kit/ware").StepDefinition<"exchange", {
            fetch: (url: string | URL, init?: RequestInit) => import("@wollybeard/kit/prom").Maybe<Response>;
        }, {
            transportType: "http";
            transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
        } & {
            request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
            transportType: "http";
            transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
            state: import("../../../../../../../build/context/context.js").Context;
        }, Promise<{
            response: Response;
            transportType: "http";
            transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
            request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
            state: import("../../../../../../../build/context/context.js").Context;
        }>>, import("@wollybeard/kit/ware").StepDefinition<"unpack", {}, {
            transportType: "http";
            transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
        } & {
            response: Response;
            transportType: "http";
            transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
            request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
            state: import("../../../../../../../build/context/context.js").Context;
        }, Promise<{
            result: import("graphql").FormattedExecutionResult<import("graphql/jsutils/ObjMap.js").ObjMap<unknown>, import("graphql/jsutils/ObjMap.js").ObjMap<unknown>>;
            transportType: "http";
            transport: import("../../../../../../../build/exports/index.js").ConfigurationNormalized;
            response: Response;
            request: import("../../../../../../../build/exports/index.js").ExchangeRequest;
            state: import("../../../../../../../build/context/context.js").Context;
        }>>>];
        readonly static: undefined;
        readonly propertiesStatic: {};
        readonly propertiesComputed: readonly [];
        readonly propertiesComputedTypeFunctions$: readonly [];
        readonly name: "TransportHttp";
    }, {
        readonly configurator: import("@wollybeard/kit/configurator").Configurator<import("../../../../../../../build/exports/index.js").DocumentBuilderConfigurationInput, import("../../../../../../../build/exports/index.js").DocumentBuilderConfigurationInput, {
            readonly domains: undefined;
        }, import("@wollybeard/kit/configurator").InputResolverGeneric<import("@wollybeard/kit/configurator").InputResolver.Standard_ShallowMerge$Func<import("../../../../../../../build/exports/index.js").DocumentBuilderConfigurationInput, import("../../../../../../../build/exports/index.js").DocumentBuilderConfigurationInput, {
            readonly domains: undefined;
        }>>>;
        readonly configuratorInitialInput: unknown;
        readonly requestInterceptor: undefined;
        readonly requestInterceptorsComputed: readonly [];
        readonly noExpandResultDataType: undefined;
        readonly transports: [];
        readonly static: undefined;
        readonly propertiesStatic: {};
        readonly propertiesComputed: readonly [];
        readonly propertiesComputedTypeFunctions$: readonly [import("../../../../../../../build/exports/index.js").DocumentBuilderProperties];
        readonly name: "DocumentBuilder";
    } & {
        readonly configuratorInitialInput: {
            domains: typeof $$Domains;
        };
    }];
    readonly extensionsIndex: $$Utilities.Extensions.ContextFragmentEmpty["extensionsIndex"];
    readonly scalars: $$Utilities.Scalars.ContextFragmentEmpty["scalars"];
    readonly configuration: {
        readonly output: $$Utilities.Configuration.ConfigurationNamespaceEmpty<$$Utilities.Configuration.Output.Configurator>;
        readonly check: $$Utilities.Configuration.ConfigurationNamespaceEmpty<$$Utilities.Configuration.Check.Configurator>;
        readonly schema: {
            configurator: import("@wollybeard/kit/configurator").Configurator<$$Utilities.Configuration.Schema.Input, {
                name: import("../../../../../../../build/types/GlobalRegistry/types.js").Client["name"];
                map: GraffleGlobal.SchemaDrivenDataMap | undefined;
            }, {
                readonly name: "default";
                readonly map: undefined;
            }, import("@wollybeard/kit/configurator").InputResolverGeneric<import("@wollybeard/kit/configurator").InputResolver.Standard_ShallowMerge$Func<$$Utilities.Configuration.Schema.Input, {
                name: import("../../../../../../../build/types/GlobalRegistry/types.js").Client["name"];
                map: GraffleGlobal.SchemaDrivenDataMap | undefined;
            }, {
                readonly name: "default";
                readonly map: undefined;
            }>>>;
            current: import("@wollybeard/kit/configurator").InputResolver.Standard_ShallowMerge<{
                current: {
                    readonly name: "default";
                    readonly map: undefined;
                };
                input: {
                    readonly name: "possible";
                    readonly map: GraffleGlobal.SchemaDrivenDataMap;
                };
            }>;
        };
        readonly DocumentBuilder: $$Utilities.Configuration.ConfigurationNamespace<import("@wollybeard/kit/configurator").Configurator<import("../../../../../../../build/exports/index.js").DocumentBuilderConfigurationInput, import("../../../../../../../build/exports/index.js").DocumentBuilderConfigurationInput, {
            readonly domains: undefined;
        }, import("@wollybeard/kit/configurator").InputResolverGeneric<import("@wollybeard/kit/configurator").InputResolver.Standard_ShallowMerge$Func<import("../../../../../../../build/exports/index.js").DocumentBuilderConfigurationInput, import("../../../../../../../build/exports/index.js").DocumentBuilderConfigurationInput, {
            readonly domains: undefined;
        }>>>>;
    };
    readonly typeHookOnRequestDocumentRootType: import("@wollybeard/kit/arr").EmptyArray;
    readonly typeHookOnRequestResult: import("@wollybeard/kit/arr").EmptyArray;
    readonly typeHookRequestResultDataTypes: undefined;
    readonly requestPipelineInterceptors: readonly import("../../../../../../../build/requestPipeline/RequestPipeline.js").RequestPipeline.BaseInterceptor[];
    readonly requestPipelineInterceptorsComputed: readonly $$Utilities.GraffleKit.Context.RequestInterceptors.RequestInterceptorComputer[];
}, {
    scalars: $$Scalar.$Registry;
}>>;
//# sourceMappingURL=client.d.ts.map