import { db } from "@/drizzle/db";
import { productsTable } from "@/drizzle/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const filters = await db
    .select({ type: productsTable.type, family: productsTable.family })
    .from(productsTable)
    .groupBy(productsTable.type, productsTable.family);

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
