import type * as $$Utilities from "graffle/utilities-for-generated";
import * as $Scalar from "./Scalar.js";
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

const Boolean = $Scalar.Boolean;

const Float = $Scalar.Float;

const ID = $Scalar.ID;

const Int = $Scalar.Int;

const String = $Scalar.String;

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

// None of your ScalarCustoms have custom scalars.

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

// None of your Enums have custom scalars.

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

const ContinentFilterInput: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: "ContinentFilterInput",
  f: {
    code: {},
  },
};

const CountryFilterInput: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: "CountryFilterInput",
  f: {
    code: {},
    continent: {},
    currency: {},
    name: {},
  },
};

const LanguageFilterInput: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: "LanguageFilterInput",
  f: {
    code: {},
  },
};

const StringQueryOperatorInput: $$Utilities.SchemaDrivenDataMap.InputObject = {
  n: "StringQueryOperatorInput",
  f: {
    eq: {},
    in: {},
    ne: {},
    nin: {},
    regex: {},
  },
};

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

const Continent: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    code: {},
    countries: {
      // nt: Country, <-- Assigned later to avoid potential circular dependency.
    },
    name: {},
  },
};

const Country: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    awsRegion: {},
    capital: {},
    code: {},
    continent: {
      // nt: Continent, <-- Assigned later to avoid potential circular dependency.
    },
    currencies: {},
    currency: {},
    emoji: {},
    emojiU: {},
    languages: {
      // nt: Language, <-- Assigned later to avoid potential circular dependency.
    },
    name: {
      a: {
        lang: {
          nt: String,
          it: [0],
        },
      },
    },
    native: {},
    phone: {},
    phones: {},
    states: {
      // nt: State, <-- Assigned later to avoid potential circular dependency.
    },
    subdivisions: {
      // nt: Subdivision, <-- Assigned later to avoid potential circular dependency.
    },
  },
};

const Language: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    code: {},
    name: {},
    native: {},
    rtl: {},
  },
};

const State: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    code: {},
    country: {
      // nt: Country, <-- Assigned later to avoid potential circular dependency.
    },
    name: {},
  },
};

const Subdivision: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    code: {},
    emoji: {},
    name: {},
  },
};

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

// None of your Interfaces have custom scalars.

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

// None of your Unions have custom scalars.

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

const Query: $$Utilities.SchemaDrivenDataMap.OutputObject = {
  f: {
    continent: {
      a: {
        code: {
          nt: ID,
          it: [1],
        },
      },
      // nt: Continent, <-- Assigned later to avoid potential circular dependency.
    },
    continents: {
      a: {
        filter: {
          nt: ContinentFilterInput,
          it: [0],
        },
      },
      // nt: Continent, <-- Assigned later to avoid potential circular dependency.
    },
    countries: {
      a: {
        filter: {
          nt: CountryFilterInput,
          it: [0],
        },
      },
      // nt: Country, <-- Assigned later to avoid potential circular dependency.
    },
    country: {
      a: {
        code: {
          nt: ID,
          it: [1],
        },
      },
      // nt: Country, <-- Assigned later to avoid potential circular dependency.
    },
    language: {
      a: {
        code: {
          nt: ID,
          it: [1],
        },
      },
      // nt: Language, <-- Assigned later to avoid potential circular dependency.
    },
    languages: {
      a: {
        filter: {
          nt: LanguageFilterInput,
          it: [0],
        },
      },
      // nt: Language, <-- Assigned later to avoid potential circular dependency.
    },
  },
};

//
//
//
//
//
//
// ==================================================================================================
//                                       Reference Assignments
//                                (avoids circular assignment issues)
// ==================================================================================================
//
//
//
//
//
//

Continent.f[`countries`]!.nt = Country;
Country.f[`continent`]!.nt = Continent;
Country.f[`languages`]!.nt = Language;
Country.f[`states`]!.nt = State;
Country.f[`subdivisions`]!.nt = Subdivision;
State.f[`country`]!.nt = Country;
Query.f[`continent`]!.nt = Continent;
Query.f[`continents`]!.nt = Continent;
Query.f[`countries`]!.nt = Country;
Query.f[`country`]!.nt = Country;
Query.f[`language`]!.nt = Language;
Query.f[`languages`]!.nt = Language;

//
//
//
//
//
//
// ==================================================================================================
//                                               Index
// ==================================================================================================
//
//
//
//
//
//

const $schemaDrivenDataMap: $$Utilities.SchemaDrivenDataMap = {
  operations: {
    query: Query,
  },
  directives: {},
  types: {
    Boolean,
    Float,
    ID,
    Int,
    String,
    ContinentFilterInput,
    CountryFilterInput,
    LanguageFilterInput,
    StringQueryOperatorInput,
    Continent,
    Country,
    Language,
    State,
    Subdivision,
    Query,
  },
};

export { $schemaDrivenDataMap as schemaDrivenDataMap };
