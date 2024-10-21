import type * as $Utilities from 'graffle/utilities-for-generated'
import type * as $SelectionSets from './SelectionSets.js'

//
//
//
//
//
//
// ==================================================================================================
//                                      Select Methods Interface
// ==================================================================================================
//
//
//
//
//
//

export interface $MethodsSelect {
  Query: Query
  Continent: Continent
  Country: Country
  Language: Language
  State: State
  Subdivision: Subdivision
}

//
//
//
//
//
//
// ==================================================================================================
//                                                Root
// ==================================================================================================
//
//
//
//
//
//

export interface Query {
  <$SelectionSet>(selectionSet: $Utilities.Exact<$SelectionSet, $SelectionSets.Query>): $SelectionSet
}

//
//
//
//
//
//
// ==================================================================================================
//                                            OutputObject
// ==================================================================================================
//
//
//
//
//
//

export interface Continent {
  <$SelectionSet>(selectionSet: $Utilities.Exact<$SelectionSet, $SelectionSets.Continent>): $SelectionSet
}

export interface Country {
  <$SelectionSet>(selectionSet: $Utilities.Exact<$SelectionSet, $SelectionSets.Country>): $SelectionSet
}

export interface Language {
  <$SelectionSet>(selectionSet: $Utilities.Exact<$SelectionSet, $SelectionSets.Language>): $SelectionSet
}

export interface State {
  <$SelectionSet>(selectionSet: $Utilities.Exact<$SelectionSet, $SelectionSets.State>): $SelectionSet
}

export interface Subdivision {
  <$SelectionSet>(selectionSet: $Utilities.Exact<$SelectionSet, $SelectionSets.Subdivision>): $SelectionSet
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Union
// ==================================================================================================
//
//
//
//
//
//

//
//
//
//
//
//
// ==================================================================================================
//                                             Interface
// ==================================================================================================
//
//
//
//
//
//
