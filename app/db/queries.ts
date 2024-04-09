import { db } from './drizzle'
import { users } from './schema'

export const createUser = async ({ id, email }: typeof users.$inferInsert) => {
    await db.insert(users).values({
        id,
        email,
    })
}
