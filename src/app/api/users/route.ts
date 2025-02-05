import { db } from "@/db";
import { NextResponse } from "next/server";
import { usersTable } from "@/db/schema";

export async function POST(req: Request) {
  const { name, age, email } = await req.json();

  if (!name || !age || !email) {
    return NextResponse.json({ message: "Please fill all the fields" });
  }

  await db.insert(usersTable).values({
    name,
    age: Number(age),
    email,
  })
}
