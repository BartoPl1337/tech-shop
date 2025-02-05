import { db } from "@/db";
import { cpuTable, gpuTable, ramTable } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {

    const gpu = await db.select({ name: gpuTable.name, price: gpuTable.price, description: gpuTable.description }).from(gpuTable)
    const ram = await db.select({ name: ramTable.name, price: ramTable.price, description: ramTable.description }).from(ramTable)
    const cpu = await db.select({ name: cpuTable.name, price: cpuTable.price, description: cpuTable.description }).from(cpuTable)
  
    return NextResponse.json({ gpu, ram, cpu });
  }