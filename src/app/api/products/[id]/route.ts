import { db } from "@/drizzle/db";
import { productImagesTable, productsTable } from "@/drizzle/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const product = await db.query.productsTable.findFirst({
    where: eq(productsTable.id, id),
  });

  const images = await db.query.productImagesTable.findMany({
    where: eq(productImagesTable.productId, id),
  });

  return NextResponse.json({ product, images });
}
