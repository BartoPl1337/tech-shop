import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { id, createdAt } from "../schemaHelper";
import { productsTable } from "./product";
import { relations } from "drizzle-orm";


export const productImagesTable = pgTable("product_images", {
    id,
    productId: uuid().notNull().references(() => productsTable.id, { onDelete: "cascade" }),
    imageUrl: text().notNull(),
    createdAt
});

export const productImagesRelations = relations(productImagesTable, ({ one }) => ({
    product: one(productsTable, {
        fields: [productImagesTable.productId],
        references: [productsTable.id]
    })
}));