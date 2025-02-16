import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { description, family, id, imageUrl, name, price } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { usersTable } from "../schema";


export const gpuTable = pgTable("gpu", {
    id,
    userId: uuid("user_id").references(() => usersTable.id),
    name,
    price,
    description,
    imageUrl,
    family,
    width: integer().notNull(),
    height: integer().notNull(),
});