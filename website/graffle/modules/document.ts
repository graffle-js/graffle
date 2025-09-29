import type { TypedDocument } from "graffle/client";
import { createStaticRootType } from "graffle/extensions/document-builder";
import type * as $$Utilities from "graffle/utilities-for-generated";
import { OperationTypeNode } from "graphql";
import type * as ArgumentsMap from "./arguments-map.js";
import type * as $$Schema from "./schema.js";
import type * as SelectionSets from "./selection-sets.js";
import type { $TypeInputsIndex } from "./type-inputs-index.js";

export interface QueryBuilder {
  battles: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>["battles"],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ battles: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { battles: $SelectionSet },
        ArgumentsMap.ArgumentsMap["query"],
        $TypeInputsIndex
      >
  >;
  beings: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>["beings"],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ beings: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { beings: $SelectionSet },
        ArgumentsMap.ArgumentsMap["query"],
        $TypeInputsIndex
      >
  >;
  pokemonByName: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >["pokemonByName"],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ pokemonByName: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { pokemonByName: $SelectionSet },
        ArgumentsMap.ArgumentsMap["query"],
        $TypeInputsIndex
      >
  >;
  pokemons: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>["pokemons"],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ pokemons: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { pokemons: $SelectionSet },
        ArgumentsMap.ArgumentsMap["query"],
        $TypeInputsIndex
      >
  >;
  trainerByName: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >["trainerByName"],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ trainerByName: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { trainerByName: $SelectionSet },
        ArgumentsMap.ArgumentsMap["query"],
        $TypeInputsIndex
      >
  >;
  trainers: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>["trainers"],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ trainers: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { trainers: $SelectionSet },
        ArgumentsMap.ArgumentsMap["query"],
        $TypeInputsIndex
      >
  >;
}

export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any;
export interface MutationBuilder {
  addPokemon: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >["addPokemon"],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addPokemon: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addPokemon: $SelectionSet },
        ArgumentsMap.ArgumentsMap["mutation"],
        $TypeInputsIndex
      >
  >;
}

export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any;
