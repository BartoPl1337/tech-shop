import { integer, pgTable, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { userTable } from "./users";
import { relations } from "drizzle-orm";
import { productsTable } from "./product";

export const cartItemTable = pgTable("cart", {
    id,
    userId: uuid("user_id").references(() => userTable.id, { onDelete: "cascade" }),
    productId: uuid("product_id").notNull(),
    quantity: integer().notNull().default(1),
    createdAt,
    updatedAt,
});

export const cartItemRelationships = relations(cartItemTable, ({ one }) => ({
    user: one(userTable, {
        fields: [cartItemTable.userId],
        references: [userTable.id],
    }),
    product: one(productsTable, {
        fields: [cartItemTable.productId],
        references: [productsTable.id],
    }),
}));