import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, description, family, id, imageUrl, name, price, updatedAt } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { productImagesTable } from "./productImageTable";
// import { user } from "./user";

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
    // userId: text("user_id").references(() => user.id),
    createdAt,
    updatedAt,
})

export const ProductsRelations = relations(productsTable, ({ one, many }) => ({
    images: many(productImagesTable),
    // user: one(user, {
    //     fields: [productsTable.userId],
    //     references: [user.id],
    // }),
}))