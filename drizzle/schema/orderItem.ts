import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id, price } from "../schemaHelper";
import { ordersTable } from "./orders";
import { relations } from "drizzle-orm";
import { gpuTable } from "./gpu";
import { ramTable } from "./ram";
import { cpuTable } from "./cpu";

export const orderItemTable = pgTable("order_items", {
    id,
    orderId: uuid("order_id").references(() => ordersTable.id),
    productId: uuid("product_id").notNull(),
    productType: text().notNull(),
    quantity: integer().notNull(),
    price,
});

export const orderItemRelationships = relations(orderItemTable, ({ one, many }) => ({
    orders: one(ordersTable, {
        fields: [orderItemTable.orderId],
        references: [ordersTable.id],
    }),
    gpu: one(gpuTable, {
        fields: [orderItemTable.orderId],
        references: [gpuTable.id],
    }),
    ram: one(ramTable, {
        fields: [orderItemTable.orderId],
        references: [ramTable.id],
    }),
    cpu: one(cpuTable, {
        fields: [orderItemTable.orderId],
        references: [cpuTable.id],
    }),
}));