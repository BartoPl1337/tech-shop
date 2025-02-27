import { db } from "@/drizzle/db";
import { productsTable } from "@/drizzle/schema";
import { NextResponse } from "next/server";

export async function GET() {
    // const types = await db
    //     .select({ type: productsTable.type })
    //     .from(productsTable)
    //     .groupBy(productsTable.type);

    // const families = await db
    //     .select({ family: productsTable.family })
    //     .from(productsTable)
    //     .groupBy(productsTable.family);

    // return NextResponse.json({
    //     categories: types.map((t) => t.type),
    //     brands: families.map((f) => f.family),
    // });

    const filters = await db.select({ type: productsTable.type, family: productsTable.family }).from(productsTable).groupBy(productsTable.type, productsTable.family);

    const groupedFilters: Record<string, string[]> = {};

    filters.forEach(({ type, family }) => {
        if (!groupedFilters[type]) {
            groupedFilters[type] = [];
        }
        if (family) {
            groupedFilters[type].push(family);
        }
    });

    return NextResponse.json(groupedFilters);
}