import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { sql } from "drizzle-orm";

export const verification = pgTable("verification", {
  id,
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp({ withTimezone: true })
    .notNull()
    .default(sql`NOW() + INTERVAL '30 days'`),
  createdAt,
  updatedAt,
});
