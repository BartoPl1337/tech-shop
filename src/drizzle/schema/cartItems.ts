import { integer, pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { userTable } from "./users";
import { relations } from "drizzle-orm";
import { cpuTable } from "./cpu";
import { gpuTable } from "./gpu";
import { ramTable } from "./ram";

export const productTypes = ["cpu", "gpu", "ram"] as const;
export type ProductType = (typeof productTypes)[number];
export const productTypeEnum = pgEnum("product_type", productTypes);

export const cartItemTable = pgTable("cart", {
    id,
    userId: uuid("user_id").references(() => userTable.id),
    productId: uuid("product_id").notNull(),
    productType: productTypeEnum().notNull(),
    quantity: integer().notNull().default(1),
    createdAt,
    updatedAt,
});

export const cartItemRelationships = relations(cartItemTable, ({ one }) => ({
    user: one(userTable, {
        fields: [cartItemTable.userId],
        references: [userTable.id],
    }),
    cpu: one(cpuTable, {
        fields: [cartItemTable.productId],
        references: [cpuTable.id],
    }),
    gpu: one(gpuTable, {
        fields: [cartItemTable.productId],
        references: [gpuTable.id],
    }),
    ram: one(ramTable, {
        fields: [cartItemTable.productId],
        references: [ramTable.id],
    }),
}));