import * as schema from './restaurant.graphql'

import { createModule } from 'graphql-modules'
import { resolvers } from './restaurant.resolvers'

export const restaurant = createModule({
	id: 'restaurant',
	dirname: __dirname,
	typeDefs: [schema],
	resolvers
})
