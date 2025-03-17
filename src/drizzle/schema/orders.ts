import { pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id,  updatedAt } from "../schemaHelper";
import { user } from "./user";
import { relations } from "drizzle-orm";
import { orderItemTable } from "./orderItem";

const orderStatuses = ["pending", "completed", "cancelled"] as const;
export type OrderStatus = (typeof orderStatuses)[number];
export const orderStatusEnum = pgEnum("order_status", orderStatuses);

export const ordersTable = pgTable("orders", {
    id,
    userId: text("user_id").references(() => user.id),
    status: 
    createdAt,
    updatedAt,
});

export const orderRelations = relations(ordersTable, ({ one, many }) => ({
    users: one(user, {
        fields: [ordersTable.userId],
        references: [user.id],
    }),
    orderItems: many(orderItemTable),
}));