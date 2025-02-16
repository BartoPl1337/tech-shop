import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, name, updatedAt } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { cartItemTable } from "./cartItems";
import { ordersTable } from "./orders";

export const userRoles = ["user", "admin"] as const;
export type UserStatus = (typeof userRoles)[number];
export const userStatusEnum = pgEnum("user_status", userRoles);

export const userTable = pgTable("users", {
    id,
    name,
    email: text().notNull().unique(),
    createdAt,
    role: userStatusEnum().notNull().default("user"),
    updatedAt,
    deletedAt: timestamp({ withTimezone: true }),
});

export const userRelations = relations(userTable, ({ many }) => ({
    cart: many(cartItemTable),
    orders: many(ordersTable),
}))