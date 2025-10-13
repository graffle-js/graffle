import { Graffle } from 'graffle'
import { Graffle as Pokemon } from '../$/graffle/$.js'

const graffle = Graffle.create().transport({ url: '' })

const a = graffle.gql(`
  {
    pokemon {
      name
    }
  }
`)

const b = Pokemon.gql(`{ pokemon { name }}`)
