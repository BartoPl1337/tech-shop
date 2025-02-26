import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { id, price } from "../schemaHelper";
import { ordersTable } from "./orders";
import { relations } from "drizzle-orm";
import { productsTable } from "./product";

export const orderItemTable = pgTable("order_items", {
    id,
    orderId: uuid("order_id").references(() => ordersTable.id),
    productId: uuid("product_id").notNull(),
    productType: text().notNull(),
    quantity: integer().notNull(),
    price,
});

export const orderItemRelationships = relations(orderItemTable, ({ one }) => ({
    orders: one(ordersTable, {
        fields: [orderItemTable.orderId],
        references: [ordersTable.id],
    }),
    product: one(productsTable, {
        fields: [orderItemTable.productId],
        references: [productsTable.id],
    }),
}));