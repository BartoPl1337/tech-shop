import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { description, family, id, imageUrl, name, price } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { userTable } from "./users";


export const ramTable = pgTable("ram", {
    id,
    userId: uuid("user_id").references(() => userTable.id),
    name,
    price,
    description,
    imageUrl,
    family,
    memory: integer().notNull(),
    type: text().notNull(),
});