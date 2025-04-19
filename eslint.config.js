import configPrisma from 'eslint-config-prisma'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
  {
    ignores: [
      'src/extensions/DocumentBuilder/__tests__/fixtures/**/*',
      'src/extensions/SchemaErrors/__tests__/fixture/**/*',
      'graffle/**/*',
      'examples/35_custom-scalar/custom-scalar.ts',
      'eslint.config.js',
      'vite.config.ts',
      'vitest*.config.ts',
      '**/generated/**/*',
      'tests/e2e/github/graffle/**/*',
      'examples/$/**/*',
      'build/**/*',
      'website/**/*',
      'bundle-sizes/**/*.{js,json}',
    ],
  },
  {
    extends: configPrisma,
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ['prefer-arrow/prefer-arrow-functions']: 'off',
      ['@typescript-eslint/only-throw-error']: 'off',
      ['@typescript-eslint/no-unsafe-assignment']: 'off',
      ['@typescript-eslint/no-unsafe-call']: 'off',
      ['@typescript-eslint/no-unsafe-member-access']: 'off',
      ['@typescript-eslint/ban-types']: 'off',
      ['@typescript-eslint/no-unnecessary-condition']: 'off',
    },
  },
)
