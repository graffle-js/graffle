import { Graffle } from './graffle/__.js'

const graffle = Graffle.create({ checkPreflight: false })

const a = await graffle.query.__typename()
a

const b = await graffle.query.codeOfConduct({
  $: {
    key: `foo`,
  },
  key: true,
})
b
