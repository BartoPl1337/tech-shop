import { decimal, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const id = uuid().primaryKey().defaultRandom();

export const updatedAt = timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date());

export const createdAt = timestamp({ withTimezone: true }).notNull().defaultNow();

export const name = text().notNull();

export const description = text().notNull();

export const imageUrl = text().notNull();

export const family = text().notNull();

export const price = decimal("price", { precision: 10, scale: 2 }).notNull()