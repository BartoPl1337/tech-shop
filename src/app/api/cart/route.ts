import { db } from "@/drizzle/db";
import { cartItemTable, productsTable, session } from "@/drizzle/schema";
import { getServerSession } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, productId, quantity } = await req.json();

  const existingItem = await db
    .select()
    .from(cartItemTable)
    .where(eq(cartItemTable.productId, productId))
    .limit(1);

  if (existingItem.length > 0) {
    await db
      .update(cartItemTable)
      .set({ quantity: (existingItem[0].quantity + (quantity || 1)) })
      .where(eq(cartItemTable.id, existingItem[0].id));
  } else {
    await db.insert(cartItemTable).values({
      userId,
      productId,
      quantity: quantity || 1,
    });
  }

  return NextResponse.json({ success: true });
}

export async function GET() {
  const user = await getServerSession();

  if (!user) {
    return NextResponse.json([]);
  }

  const cartItems = await db
    .select({
      quantity: cartItemTable.quantity,
      productId: cartItemTable.productId,
      name: productsTable.name,
      price: productsTable.price,
      image: productsTable.imageUrl,
    })
    .from(cartItemTable)
    .innerJoin(productsTable, eq(cartItemTable.productId, productsTable.id))
    .where(eq(cartItemTable.userId, user?.user.id));
  return NextResponse.json(cartItems);
}

export async function PATCH(req: NextRequest) {
  const {productId, quantity} = await req.json();

  const updated = await db
  .update(cartItemTable)
  .set({quantity})
  .where(eq(cartItemTable.productId, productId));

  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  const {productId} = await req.json();

  const deleted = await db
  .delete(cartItemTable)
  .where(eq(cartItemTable.productId, productId));

  return NextResponse.json(deleted);
}