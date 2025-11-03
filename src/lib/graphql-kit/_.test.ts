import { describe, expect, test } from 'vitest'
import { GraphqlKit } from './_.js'

const operationNameOne = `one`
const operationNameTwo = `two`
const docNoDefinedOps = ``
const docMultipleQueryOperations = `query ${operationNameOne} { x }\nquery ${operationNameTwo} { x }`
const docMultipleMixedOperations = `mutation ${operationNameOne} { x }\nquery ${operationNameTwo} { x }`
const docOverloadedTerms = `query { queryX }`

const ot = GraphqlKit.Schema.OperationType

type CaseParameters = [
  description: string,
  request: GraphqlKit.Request.RequestInput,
  result: null | GraphqlKit.Schema.OperationType.OperationType,
]

describe(`getOperationType`, () => {
  // dprint-ignore
  test.each<CaseParameters>([

    [ `null if no defined operations and operation name given `, 														{ query: docNoDefinedOps, operationName: operationNameOne }, 						null ],
    [ `null if multiple defined operations and no operation name given`, 										{ query: docMultipleQueryOperations  }, 																null ],
    [ `null if multiple defined operations and no operation name given (empty string)`, 		{ query: docMultipleQueryOperations, operationName: ``  }, 							null ],
    [ `null if multiple defined operations and operation name given not found`, 						{ query: docMultipleQueryOperations, operationName: `foo` }, 						null ],
    [ `assume query if no defined operations and no operation name given `, 								{ query: docNoDefinedOps }, 																						ot.QUERY ],
    [ `query if multiple defined query operations and no query operation name given `, 			{ query: docMultipleQueryOperations, operationName: operationNameOne }, ot.QUERY ],
    [ `query if multiple defined mixed operations and no mutation operation name given `, 	{ query: docMultipleMixedOperations, operationName: operationNameTwo }, ot.QUERY ],
    [ `mutation if multiple defined mixed operations and no query operation name given `, 	{ query: docMultipleMixedOperations, operationName: operationNameOne }, ot.MUTATION ],
    [ `mutation if only operation without name and no operation given `, 									  { query: `mutation { user { name } }` }, 						                    ot.MUTATION ],
    [ `overloaded terms do not confuse parser`, 	                                          { query: docOverloadedTerms },                                          ot.QUERY ],
  ])(`%s`, (_, request, result) => {
    expect(GraphqlKit.Document.getOperationType(request)).toEqual(result)
  })
})
