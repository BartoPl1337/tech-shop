import { integer, pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { createdAt, description, family, id, imageUrl, name, price, updatedAt } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { productImagesTable } from "./productImageTable";
import { userTable } from "./users";

export const productTypeEnum = pgEnum("product_type", ["CPU", "GPU", "RAM", "MONITOR", "KEYBOARD"]);

export const productsTable = pgTable("products", {
    id,
    type: productTypeEnum().notNull(),
    name,
    price,
    description,
    imageUrl,
    family,
    memory: integer(),
    userId: uuid("user_id").references(() => userTable.id),
    createdAt,
    updatedAt,
})

export const ProductsRelations = relations(productsTable, ({ one, many }) => ({
    images: many(productImagesTable),
    user: one(userTable, {
        fields: [productsTable.userId],
        references: [userTable.id],
    }),
}))