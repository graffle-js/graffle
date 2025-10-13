import { Graffle } from '#graffle'

const graffle = Graffle.create().transport({ url: '' })

const resultPromise = graffle.gql(`
  {
    pokemon {
      name
    }
  }
`)
