import type { Schema as $ } from "graffle/utilities-for-generated";
import type * as $$Utilities from "graffle/utilities-for-generated";
import * as $$Data from "./data.js";
import * as $$Scalar from "./scalar.js";

export namespace Schema {
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

  //                                               Query
  // --------------------------------------------------------------------------------------------------
  //

  export interface Query extends $.OutputObject {
    name: "Query";
    fields: {
      __typename: Query.__typename;
      continent: Query.continent;
      continents: Query.continents;
      countries: Query.countries;
      country: Query.country;
      language: Query.language;
      languages: Query.languages;
    };
  }

  export namespace Query {
    export interface __typename extends $.OutputField {
      name: "__typename";
      arguments: {};
      inlineType: [1];
      namedType: {
        kind: "__typename";
        value: "Query";
      };
    }

    export interface continent extends $.OutputField {
      name: "continent";
      arguments: {
        code: {
          kind: "InputField";
          name: "code";
          inlineType: [1];
          namedType: $$NamedTypes.$$ID;
        };
      };
      inlineType: [0];
      namedType: $$NamedTypes.$$Continent;
    }

    export interface continents extends $.OutputField {
      name: "continents";
      arguments: {
        filter: {
          kind: "InputField";
          name: "filter";
          inlineType: [0];
          namedType: $$NamedTypes.$$ContinentFilterInput;
        };
      };
      inlineType: [1, [1]];
      namedType: $$NamedTypes.$$Continent;
    }

    export interface countries extends $.OutputField {
      name: "countries";
      arguments: {
        filter: {
          kind: "InputField";
          name: "filter";
          inlineType: [0];
          namedType: $$NamedTypes.$$CountryFilterInput;
        };
      };
      inlineType: [1, [1]];
      namedType: $$NamedTypes.$$Country;
    }

    export interface country extends $.OutputField {
      name: "country";
      arguments: {
        code: {
          kind: "InputField";
          name: "code";
          inlineType: [1];
          namedType: $$NamedTypes.$$ID;
        };
      };
      inlineType: [0];
      namedType: $$NamedTypes.$$Country;
    }

    export interface language extends $.OutputField {
      name: "language";
      arguments: {
        code: {
          kind: "InputField";
          name: "code";
          inlineType: [1];
          namedType: $$NamedTypes.$$ID;
        };
      };
      inlineType: [0];
      namedType: $$NamedTypes.$$Language;
    }

    export interface languages extends $.OutputField {
      name: "languages";
      arguments: {
        filter: {
          kind: "InputField";
          name: "filter";
          inlineType: [0];
          namedType: $$NamedTypes.$$LanguageFilterInput;
        };
      };
      inlineType: [1, [1]];
      namedType: $$NamedTypes.$$Language;
    }
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

  //                                             Continent
  // --------------------------------------------------------------------------------------------------
  //

  export interface Continent extends $.OutputObject {
    name: "Continent";
    fields: {
      __typename: Continent.__typename;
      code: Continent.code;
      countries: Continent.countries;
      name: Continent.name;
    };
  }

  export namespace Continent {
    export interface __typename extends $.OutputField {
      name: "__typename";
      arguments: {};
      inlineType: [1];
      namedType: {
        kind: "__typename";
        value: "Continent";
      };
    }

    export interface code extends $.OutputField {
      name: "code";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$ID;
    }

    export interface countries extends $.OutputField {
      name: "countries";
      arguments: {};
      inlineType: [1, [1]];
      namedType: $$NamedTypes.$$Country;
    }

    export interface name extends $.OutputField {
      name: "name";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }
  }

  //                                              Country
  // --------------------------------------------------------------------------------------------------
  //

  export interface Country extends $.OutputObject {
    name: "Country";
    fields: {
      __typename: Country.__typename;
      awsRegion: Country.awsRegion;
      capital: Country.capital;
      code: Country.code;
      continent: Country.continent;
      currencies: Country.currencies;
      currency: Country.currency;
      emoji: Country.emoji;
      emojiU: Country.emojiU;
      languages: Country.languages;
      name: Country.name;
      native: Country.native;
      phone: Country.phone;
      phones: Country.phones;
      states: Country.states;
      subdivisions: Country.subdivisions;
    };
  }

  export namespace Country {
    export interface __typename extends $.OutputField {
      name: "__typename";
      arguments: {};
      inlineType: [1];
      namedType: {
        kind: "__typename";
        value: "Country";
      };
    }

    export interface awsRegion extends $.OutputField {
      name: "awsRegion";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }

    export interface capital extends $.OutputField {
      name: "capital";
      arguments: {};
      inlineType: [0];
      namedType: $$NamedTypes.$$String;
    }

    export interface code extends $.OutputField {
      name: "code";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$ID;
    }

    export interface continent extends $.OutputField {
      name: "continent";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$Continent;
    }

    export interface currencies extends $.OutputField {
      name: "currencies";
      arguments: {};
      inlineType: [1, [1]];
      namedType: $$NamedTypes.$$String;
    }

    export interface currency extends $.OutputField {
      name: "currency";
      arguments: {};
      inlineType: [0];
      namedType: $$NamedTypes.$$String;
    }

    export interface emoji extends $.OutputField {
      name: "emoji";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }

    export interface emojiU extends $.OutputField {
      name: "emojiU";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }

    export interface languages extends $.OutputField {
      name: "languages";
      arguments: {};
      inlineType: [1, [1]];
      namedType: $$NamedTypes.$$Language;
    }

    export interface name extends $.OutputField {
      name: "name";
      arguments: {
        lang: {
          kind: "InputField";
          name: "lang";
          inlineType: [0];
          namedType: $$NamedTypes.$$String;
        };
      };
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }

    export interface native extends $.OutputField {
      name: "native";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }

    export interface phone extends $.OutputField {
      name: "phone";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }

    export interface phones extends $.OutputField {
      name: "phones";
      arguments: {};
      inlineType: [1, [1]];
      namedType: $$NamedTypes.$$String;
    }

    export interface states extends $.OutputField {
      name: "states";
      arguments: {};
      inlineType: [1, [1]];
      namedType: $$NamedTypes.$$State;
    }

    export interface subdivisions extends $.OutputField {
      name: "subdivisions";
      arguments: {};
      inlineType: [1, [1]];
      namedType: $$NamedTypes.$$Subdivision;
    }
  }

  //                                              Language
  // --------------------------------------------------------------------------------------------------
  //

  export interface Language extends $.OutputObject {
    name: "Language";
    fields: {
      __typename: Language.__typename;
      code: Language.code;
      name: Language.name;
      native: Language.native;
      rtl: Language.rtl;
    };
  }

  export namespace Language {
    export interface __typename extends $.OutputField {
      name: "__typename";
      arguments: {};
      inlineType: [1];
      namedType: {
        kind: "__typename";
        value: "Language";
      };
    }

    export interface code extends $.OutputField {
      name: "code";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$ID;
    }

    export interface name extends $.OutputField {
      name: "name";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }

    export interface native extends $.OutputField {
      name: "native";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }

    export interface rtl extends $.OutputField {
      name: "rtl";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$Boolean;
    }
  }

  //                                               State
  // --------------------------------------------------------------------------------------------------
  //

  export interface State extends $.OutputObject {
    name: "State";
    fields: {
      __typename: State.__typename;
      code: State.code;
      country: State.country;
      name: State.name;
    };
  }

  export namespace State {
    export interface __typename extends $.OutputField {
      name: "__typename";
      arguments: {};
      inlineType: [1];
      namedType: {
        kind: "__typename";
        value: "State";
      };
    }

    export interface code extends $.OutputField {
      name: "code";
      arguments: {};
      inlineType: [0];
      namedType: $$NamedTypes.$$String;
    }

    export interface country extends $.OutputField {
      name: "country";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$Country;
    }

    export interface name extends $.OutputField {
      name: "name";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }
  }

  //                                            Subdivision
  // --------------------------------------------------------------------------------------------------
  //

  export interface Subdivision extends $.OutputObject {
    name: "Subdivision";
    fields: {
      __typename: Subdivision.__typename;
      code: Subdivision.code;
      emoji: Subdivision.emoji;
      name: Subdivision.name;
    };
  }

  export namespace Subdivision {
    export interface __typename extends $.OutputField {
      name: "__typename";
      arguments: {};
      inlineType: [1];
      namedType: {
        kind: "__typename";
        value: "Subdivision";
      };
    }

    export interface code extends $.OutputField {
      name: "code";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$ID;
    }

    export interface emoji extends $.OutputField {
      name: "emoji";
      arguments: {};
      inlineType: [0];
      namedType: $$NamedTypes.$$String;
    }

    export interface name extends $.OutputField {
      name: "name";
      arguments: {};
      inlineType: [1];
      namedType: $$NamedTypes.$$String;
    }
  }

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            InputObject
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                        ContinentFilterInput
  // --------------------------------------------------------------------------------------------------
  //

  export interface ContinentFilterInput extends $.InputObject {
    name: "ContinentFilterInput";
    isAllFieldsNullable: true;
    fields: {
      code: ContinentFilterInput.code;
    };
  }

  export namespace ContinentFilterInput {
    export interface code extends $.InputField {
      name: "code";
      inlineType: [0];
      namedType: $$NamedTypes.$$StringQueryOperatorInput;
    }
  }

  //                                         CountryFilterInput
  // --------------------------------------------------------------------------------------------------
  //

  export interface CountryFilterInput extends $.InputObject {
    name: "CountryFilterInput";
    isAllFieldsNullable: true;
    fields: {
      code: CountryFilterInput.code;
      continent: CountryFilterInput.continent;
      currency: CountryFilterInput.currency;
      name: CountryFilterInput.name;
    };
  }

  export namespace CountryFilterInput {
    export interface code extends $.InputField {
      name: "code";
      inlineType: [0];
      namedType: $$NamedTypes.$$StringQueryOperatorInput;
    }

    export interface continent extends $.InputField {
      name: "continent";
      inlineType: [0];
      namedType: $$NamedTypes.$$StringQueryOperatorInput;
    }

    export interface currency extends $.InputField {
      name: "currency";
      inlineType: [0];
      namedType: $$NamedTypes.$$StringQueryOperatorInput;
    }

    export interface name extends $.InputField {
      name: "name";
      inlineType: [0];
      namedType: $$NamedTypes.$$StringQueryOperatorInput;
    }
  }

  //                                        LanguageFilterInput
  // --------------------------------------------------------------------------------------------------
  //

  export interface LanguageFilterInput extends $.InputObject {
    name: "LanguageFilterInput";
    isAllFieldsNullable: true;
    fields: {
      code: LanguageFilterInput.code;
    };
  }

  export namespace LanguageFilterInput {
    export interface code extends $.InputField {
      name: "code";
      inlineType: [0];
      namedType: $$NamedTypes.$$StringQueryOperatorInput;
    }
  }

  //                                      StringQueryOperatorInput
  // --------------------------------------------------------------------------------------------------
  //

  export interface StringQueryOperatorInput extends $.InputObject {
    name: "StringQueryOperatorInput";
    isAllFieldsNullable: true;
    fields: {
      eq: StringQueryOperatorInput.eq;
      in: StringQueryOperatorInput.$in;
      ne: StringQueryOperatorInput.ne;
      nin: StringQueryOperatorInput.nin;
      regex: StringQueryOperatorInput.regex;
    };
  }

  export namespace StringQueryOperatorInput {
    export interface eq extends $.InputField {
      name: "eq";
      inlineType: [0];
      namedType: $$NamedTypes.$$String;
    }

    export interface $in extends $.InputField {
      name: "in";
      inlineType: [0, [1]];
      namedType: $$NamedTypes.$$String;
    }

    export interface ne extends $.InputField {
      name: "ne";
      inlineType: [0];
      namedType: $$NamedTypes.$$String;
    }

    export interface nin extends $.InputField {
      name: "nin";
      inlineType: [0, [1]];
      namedType: $$NamedTypes.$$String;
    }

    export interface regex extends $.InputField {
      name: "regex";
      inlineType: [0];
      namedType: $$NamedTypes.$$String;
    }
  }

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
  //                                                Enum
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
  //                                            ScalarCustom
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
  //                                           ScalarStandard
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                              Boolean
  // --------------------------------------------------------------------------------------------------
  //

  export type Boolean = $.StandardTypes.Boolean;

  //                                               Float
  // --------------------------------------------------------------------------------------------------
  //

  export type Float = $.StandardTypes.Float;

  //                                                 ID
  // --------------------------------------------------------------------------------------------------
  //

  export type ID = $.StandardTypes.ID;

  //                                                Int
  // --------------------------------------------------------------------------------------------------
  //

  export type Int = $.StandardTypes.Int;

  //                                               String
  // --------------------------------------------------------------------------------------------------
  //

  export type String = $.StandardTypes.String;

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                         Named Types Index
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  /**
   * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
   *     name clashing between the field name and the object name.
   *
   *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
   *     would end up with an error of `export interface Foo extends Foo ...`
   */

  namespace $$NamedTypes {
    export type $$Query = Query;
    export type $$Continent = Continent;
    export type $$Country = Country;
    export type $$Language = Language;
    export type $$State = State;
    export type $$Subdivision = Subdivision;
    export type $$ContinentFilterInput = ContinentFilterInput;
    export type $$CountryFilterInput = CountryFilterInput;
    export type $$LanguageFilterInput = LanguageFilterInput;
    export type $$StringQueryOperatorInput = StringQueryOperatorInput;
    export type $$Boolean = Boolean;
    export type $$Float = Float;
    export type $$ID = ID;
    export type $$Int = Int;
    export type $$String = String;
  }
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Schema
// ==================================================================================================
//
//
//
//
//
//

export interface Schema<$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Scalar.$Registry> extends $ {
  name: $$Data.Name;
  operationsAvailable: ["query"];
  RootUnion: Schema.Query;
  Root: {
    query: Schema.Query;
    mutation: null;
    subscription: null;
  };
  allTypes: {
    Query: Schema.Query;
    Continent: Schema.Continent;
    Country: Schema.Country;
    Language: Schema.Language;
    State: Schema.State;
    Subdivision: Schema.Subdivision;
  };
  objects: {
    Continent: Schema.Continent;
    Country: Schema.Country;
    Language: Schema.Language;
    State: Schema.State;
    Subdivision: Schema.Subdivision;
  };
  unions: {};
  interfaces: {};
  scalars: $Scalars;
  extensions: $$Utilities.GlobalRegistry.TypeExtensions;
}
