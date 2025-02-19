import { createApplication } from 'graphql-modules'
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'
import { restaurant } from './restaurant/module'

// This is your application, it contains your GraphQL schema and the implementation of it.
export const application = createApplication({
	modules: [restaurant],
	providers: [
		{
			provide: NodePgDatabase<Record<string, never>>,
			useFactory() {
				return drizzle(process.env.DATABASE_URL!)
			}
		}
	]
})

// This is your actual GraphQL schema
export const schema = application.schema
