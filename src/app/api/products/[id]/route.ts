import { db } from "@/drizzle/db";
import { productImagesTable, productsTable } from "@/drizzle/schema";
import { NextResponse } from "next/server";
import { eq } from 'drizzle-orm';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const product = await db.query.productsTable.findFirst({
            where: eq(productsTable.id, params.id)
        })

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        const images = await db.query.productImagesTable.findMany({
            where: eq(productImagesTable.productId, params.id)
        })

        return NextResponse.json({ product, images });
    } catch (e) {
        return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
    }
}