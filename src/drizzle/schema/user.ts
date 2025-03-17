import { boolean, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, name, updatedAt } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { cartItemTable } from "./cartItems";
import { ordersTable } from "./orders";
import { productsTable } from "./product";

export const userRoles = ["user", "admin"] as const;
export type UserStatus = (typeof userRoles)[number];
export const userStatusEnum = pgEnum("user_status", userRoles);

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name,
  email: text().notNull().unique(),
  role: userStatusEnum().notNull().default("user"),
  emailVerified: boolean().notNull(),
  image: text(),
  createdAt,
  updatedAt,
  deletedAt: timestamp({ withTimezone: true }),
});

export const userRelations = relations(user, ({ many }) => ({
  cart: many(cartItemTable),
  orders: many(ordersTable),
//   products: many(productsTable),
}));
