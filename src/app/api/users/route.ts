import { userTable } from "@/drizzle/schema";
import { db } from "../../../drizzle/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ message: "Please fill all the fields" });
  }

  await db.insert(userTable).values({
    name,
    email,
  })
}