import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { userTable } from "./users";
import { relations } from "drizzle-orm";
import { cpuTable } from "./cpu";
import { gpuTable } from "./gpu";
import { ramTable } from "./ram";

export const cartItemTable = pgTable("cart", {
    id,
    userId: uuid("user_id").references(() => userTable.id),
    productId: uuid("product_id").notNull(),
    productType: text().notNull(),
    createdAt,
    updatedAt,
});

export const cartItemRelationships = relations(cartItemTable, ({ one }) => ({
    users: one(userTable, {
        fields: [cartItemTable.userId],
        references: [userTable.id],
    }),
    gpu: one(gpuTable, {
        fields: [cartItemTable.productId],
        references: [gpuTable.id],
    }),
    ram: one(ramTable, {
        fields: [cartItemTable.productId],
        references: [ramTable.id],
    }),
    cpu: one(cpuTable, {
        fields: [cartItemTable.productId],
        references: [cpuTable.id],
    }),
}));