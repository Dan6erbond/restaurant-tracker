import * as schema from './restaurant.graphql'

import { createModule } from 'graphql-modules'

export const restaurant = createModule({
	id: 'restaurant',
	dirname: __dirname,
	typeDefs: [schema]
})
