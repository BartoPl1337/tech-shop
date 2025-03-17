import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { user } from "./user";
import { relations } from "drizzle-orm";
import { productsTable } from "./product";

export const cartItemTable = pgTable("cart", {
    id,
    userId: text("user_id").references(() => user.id, { onDelete: "cascade" }),
    productId: uuid("product_id").notNull(),
    quantity: integer().notNull().default(1),
    createdAt,
    updatedAt,
});

export const cartItemRelationships = relations(cartItemTable, ({ one }) => ({
    user: one(user, {
        fields: [cartItemTable.userId],
        references: [user.id],
    }),
    product: one(productsTable, {
        fields: [cartItemTable.productId],
        references: [productsTable.id],
    }),
}));