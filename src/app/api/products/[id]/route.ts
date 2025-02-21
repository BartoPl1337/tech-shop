import { db } from "@/drizzle/db";
import { cpuTable } from "@/drizzle/schema";
import { NextResponse } from "next/server";
import { eq } from 'drizzle-orm';

type Param = {
    params: {
        id: string;
    }
}
export const GET = async (req: Request, params: Param) => {
    const product = await db.query.cpuTable.findFirst({
        where: eq(cpuTable.id, params.params.id)
    })
    const product3 = await db.query.cpuTable.findFirst({
        where: eq(cpuTable.id, params.params.id)
    })
    const product2 = await db.query.cpuTable.findFirst({
        where: eq(cpuTable.id, params.params.id)
    })
    return NextResponse.json({ product, ...product2, ...product3 });
}