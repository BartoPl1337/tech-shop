import { integer, pgTable, uuid } from "drizzle-orm/pg-core";
import { description, family, id, imageUrl, name, price } from "../schemaHelper";
import { userTable } from "./users";

export const gpuTable = pgTable("gpu", {
    id,
    userId: uuid("user_id").references(() => userTable.id),
    name,
    price,
    description,
    imageUrl,
    family,
    width: integer().notNull(),
    height: integer().notNull(),
});