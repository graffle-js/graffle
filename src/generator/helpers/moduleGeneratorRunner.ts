import { Str } from '@wollybeard/kit'
import type { Config } from '../config/config.js'
import type { GeneratedModule } from './moduleGenerator.js'

type FactoryModuleGeneratorRunner = <$CustomInput extends object = {}>(
  runnerImplementation: ModuleGeneratorRunnerImplementation<$CustomInput>,
) => CodeGenerator<$CustomInput>

export type ModuleGeneratorRunner = (config: Config) => GeneratedModule | GeneratedModule[]

export type CodeGenerator<$CustomInput extends object = {}> = (input: $CustomInput & BaseInput) => Str.Line

export type ModuleGeneratorRunnerImplementation<$CustomInput extends object = {}> = (
  input: $CustomInput & BaseInputInternal,
) => void

interface BaseInputInternal extends BaseInput {
  code: Str.Builder
}

interface BaseInput {
  config: Config
}

export const createCodeGenerator: FactoryModuleGeneratorRunner = (runnerImplementation) => {
  return (input) => {
    const codePusher = Str.Builder()
    runnerImplementation({ ...input, code: codePusher })
    return codePusher.toString()
  }
}
