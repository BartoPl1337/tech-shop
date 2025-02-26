import { productsTable } from "@/drizzle/schema";
import { db } from "../../../drizzle/db";
import { ilike } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  const query = db.select({
    name: productsTable.name,
    price: productsTable.price,
    description: productsTable.description,
    image: productsTable.imageUrl,
    family: productsTable.family,
    id: productsTable.id,
  }).from(productsTable);

  if (name) {
    query.where(ilike(productsTable.name, `${name}%`));
  }

  const products = await query;

  return NextResponse.json(products);
}