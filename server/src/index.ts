import 'reflect-metadata'
import 'dotenv/config'
import 'graphql-import-node'

import { application } from './application'
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { useGraphQLModules } from '@envelop/graphql-modules'

process.on('SIGINT', () => {
	console.log('\nGracefully shutting down')
	process.exit(0)
})

export function main() {
	try {
		console.log('🎉 Party time! Your app is ready to rock!\n')
		console.log('👉 Edit \x1b[38;5;208msrc/index.ts\x1b[0m and watch the magic happen here!')
		console.log('   Lets build something amazing!\n')

		const yoga = createYoga({
			plugins: [useGraphQLModules(application)]
		})

		const server = createServer(yoga)

		server.listen(4000, () => {
			console.log(`🚀 Server ready, open GraphiQL on http://localhost:4000`)
		})
	} catch (error) {
		console.error('Failed to start:', error)
		process.exit(1)
	}
}

main()
