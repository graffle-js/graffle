import type { InferResult } from "graffle/schema";
import type * as $$Utilities from "graffle/utilities-for-generated";
import * as $$Schema from "./schema.js";
import * as $$SelectionSets from "./selection-sets.js";

export interface QueryMethods<$Context extends $$Utilities.ClientContext> {
  $batch: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<$Context["scalars"]>>,
  ) => Promise<
    $$Utilities.SimplifyExcept<
      $Context["scalars"]["typesDecoded"],
      $$Utilities.HandleOutput<
        $Context,
        InferResult.OperationQuery<$SelectionSet, $$Schema.Schema<$Context["scalars"]>>
      >
    >
  >;
  __typename: () => Promise<
    $$Utilities.Simplify<
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        { __typename: "Query" },
        "__typename"
      >
    >
  >;

  continent: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.continent<$Context["scalars"]>>,
  ) => Promise<
    $$Utilities.SimplifyExcept<
      $Context["scalars"]["typesDecoded"],
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ continent: $SelectionSet }, $$Schema.Schema<$Context["scalars"]>>,
        "continent"
      >
    >
  >;

  continents: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.continents<$Context["scalars"]>>,
  ) => Promise<
    $$Utilities.SimplifyExcept<
      $Context["scalars"]["typesDecoded"],
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ continents: $SelectionSet }, $$Schema.Schema<$Context["scalars"]>>,
        "continents"
      >
    >
  >;

  countries: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.countries<$Context["scalars"]>>,
  ) => Promise<
    $$Utilities.SimplifyExcept<
      $Context["scalars"]["typesDecoded"],
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ countries: $SelectionSet }, $$Schema.Schema<$Context["scalars"]>>,
        "countries"
      >
    >
  >;

  country: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.country<$Context["scalars"]>>,
  ) => Promise<
    $$Utilities.SimplifyExcept<
      $Context["scalars"]["typesDecoded"],
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ country: $SelectionSet }, $$Schema.Schema<$Context["scalars"]>>,
        "country"
      >
    >
  >;

  language: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.language<$Context["scalars"]>>,
  ) => Promise<
    $$Utilities.SimplifyExcept<
      $Context["scalars"]["typesDecoded"],
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ language: $SelectionSet }, $$Schema.Schema<$Context["scalars"]>>,
        "language"
      >
    >
  >;

  languages: <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.languages<$Context["scalars"]>>,
  ) => Promise<
    $$Utilities.SimplifyExcept<
      $Context["scalars"]["typesDecoded"],
      $$Utilities.HandleOutputGraffleRootField<
        $Context,
        InferResult.OperationQuery<{ languages: $SelectionSet }, $$Schema.Schema<$Context["scalars"]>>,
        "languages"
      >
    >
  >;
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.ClientContext> {
  query: QueryMethods<$Context>;
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction.Fn {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this["params"]>;
}
