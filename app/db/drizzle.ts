import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const client = new pg.Client({
  connectionString:
    "postgresql://16s2nj:xau_hvcrUgNvKLe4c7s23QTq8PL2SgsLv1vM2@eu-west-1.sql.xata.sh/test:main?sslmode=require",
});
await client.connect();
export const db = drizzle(client, { schema });
