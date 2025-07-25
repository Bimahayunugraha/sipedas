import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/server/drizzle/schema";

export const client = postgres(process.env.DATABASE_URL!, {
  max: 1,
  prepare: false,
});

export const db = drizzle(client, { schema });
