import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { description, family, id, imageUrl, name, price } from "../schemaHelper";
import { userTable } from "./users";

export const cpuTable = pgTable("cpu", {
    id,
    userId: uuid("user_id").references(() => userTable.id),
    name,
    price,
    description,
    imageUrl,
    family,
    socket: text().notNull(),
    threads: integer().notNull(),
});
