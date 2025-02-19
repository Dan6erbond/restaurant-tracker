import { integer } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'
import { varchar } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique()
})
