import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { relations, sql } from "drizzle-orm";
import { user } from "./user";

export const session = pgTable("session", {
  id,
  expiresAt: timestamp({ withTimezone: true })
    .notNull()
    .default(sql`NOW() + INTERVAL '30 days'`),
  createdAt,
  updatedAt,
  token: text().notNull().unique(),
  ipAddress: text(),
  userAgent: text(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));
