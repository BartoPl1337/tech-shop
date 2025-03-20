import { db } from "@/drizzle/db";
import { cartItemTable } from "@/drizzle/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, productId, quantity } = await req.json();

  await db.insert(cartItemTable).values({
    userId,
    productId,
    quantity: quantity || 1,
  });
}

export async function GET() {
    const cartItems = await db.select({ quantity: cartItemTable.quantity, productId: cartItemTable.productId }).from(cartItemTable);
}