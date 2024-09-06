import { SocialStudies } from './$/generated-clients/SocialStudies/__.js'
import { showJson } from './$/helpers.js'

const socialStudies = SocialStudies.create()

const countries = await socialStudies.query.countries({
  $: { filter: { name: { in: [`Canada`, `Germany`, `Japan`] } } },
  name: true,
  continent: { name: true },
})

showJson(countries)
