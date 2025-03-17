import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { user } from "./user";
import { relations, sql } from "drizzle-orm";

export const account = pgTable("account", {
  id,
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: uuid()
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp({ withTimezone: true })
    .notNull()
    .default(sql`NOW() + INTERVAL '7 days'`),
  refreshTokenExpiresAt: timestamp({ withTimezone: true })
    .notNull()
    .default(sql`NOW() + INTERVAL '2 days'`),
  scope: text(),
  password: text(),
  createdAt,
  updatedAt,
});

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
