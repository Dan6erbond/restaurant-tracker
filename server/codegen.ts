import type { CodegenConfig } from '@graphql-codegen/cli/typings/index.js'

const config: CodegenConfig = {
	schema: './src/**/*.graphql',
	documents: 'src/**/*.spec.ts',
	ignoreNoDocuments: true,
	hooks: {
		afterAllFileWrite: ['prettier --write']
	},
	generates: {
		'./src/modules/': {
			preset: 'graphql-modules',
			presetConfig: {
				baseTypesPath: '../generated-types/graphql.ts',
				filename: 'generated-types/module-types.ts'
			},
			plugins: [
				{
					add: {
						content: '/* eslint-disable */'
					}
				},
				'typescript',
				'typescript-resolvers'
			]
		},
		'./src/gql/': {
			preset: 'client-preset'
		}
	}
}
export default config
