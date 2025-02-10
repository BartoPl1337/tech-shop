import { relations } from "drizzle-orm";
import { integer, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().notNull().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow().$onUpdate(() => new Date()),
});

export const gpuTable = pgTable("gpu", {
  userId: uuid("user_id").references(() => usersTable.id),
  name: varchar({ length: 255 }).notNull(),
  memory: integer().notNull(),
  price: integer().notNull(),
  family: varchar({ length: 255 }).notNull(),
  width: integer().notNull(),
  height: integer().notNull(),
  id: uuid().primaryKey().defaultRandom(),
  description: varchar({ length: 255 }).notNull(),
});

export const cpuTable = pgTable("cpu", {
  userId: uuid("user_id").references(() => usersTable.id),
  name: varchar({ length: 255 }).notNull(),
  family: varchar({ length: 255 }).notNull(),
  socket: varchar({ length: 255 }).notNull(),
  threads: integer().notNull(),
  price: integer().notNull(),
  id: uuid().primaryKey().defaultRandom(),
  description: varchar({ length: 255 }).notNull(),
});

export const ramTable = pgTable("ram", {
  userId: uuid("user_id").references(() => usersTable.id),
  name: varchar({ length: 255 }).notNull(),
  family: varchar({ length: 255 }).notNull(),
  type: varchar({ length: 255 }).notNull(),
  memory: integer().notNull(),
  price: integer().notNull(),
  id: uuid().primaryKey().defaultRandom(),
  description: varchar({ length: 255 }).notNull(),
});

export const userRelations = relations(usersTable, ({ many }) => ({
  gpus: many(gpuTable),
  cpus: many(cpuTable),
  rams: many(ramTable),
}));

export const gpuRelations = relations(gpuTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [gpuTable.userId],
    references: [usersTable.id],
  })
}));
export const cpuRelations = relations(cpuTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [cpuTable.userId],
    references: [usersTable.id],
  })
}));
export const ramRelations = relations(ramTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [ramTable.userId],
    references: [usersTable.id],
  })
}));