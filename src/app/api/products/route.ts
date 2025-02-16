import { db } from "../../../drizzle/db";
import { cpuTable, gpuTable, ramTable } from "../../../drizzle/schema";
import { ilike  } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');

    const gpu = await db.select({ name: gpuTable.name, price: gpuTable.price, description: gpuTable.description }).from(gpuTable).where(name ? ilike(gpuTable.name, `%${name}%`): undefined)
    const ram = await db.select({ name: ramTable.name, price: ramTable.price, description: ramTable.description }).from(ramTable).where(name ? ilike(ramTable.name, `%${name}%`): undefined)
    const cpu = await db.select({ name: cpuTable.name, price: cpuTable.price, description: cpuTable.description }).from(cpuTable).where(name ? ilike(cpuTable.name, `%${name}%`): undefined)


    return NextResponse.json([...gpu, ...ram, ...cpu]);
  }

