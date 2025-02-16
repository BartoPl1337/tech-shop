import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { createdAt, id,  updatedAt } from "../schemaHelper";
import { userTable } from "./users";
import { relations } from "drizzle-orm";
import { orderItemTable } from "./orderItem";

const orderStatuses = ["pending", "completed", "cancelled"] as const;
export type OrderStatus = (typeof orderStatuses)[number];
export const orderStatusEnum = pgEnum("order_status", orderStatuses);

export const ordersTable = pgTable("orders", {
    id,
    userId: uuid("user_id").references(() => userTable.id),
    status: 
    createdAt,
    updatedAt,
});

export const orderRelations = relations(ordersTable, ({ one, many }) => ({
    users: one(userTable, {
        fields: [ordersTable.userId],
        references: [userTable.id],
    }),
    orderItems: many(orderItemTable),
}));