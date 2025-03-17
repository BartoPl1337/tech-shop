// import { user } from "@/drizzle/schema";
// import { db } from "../../../drizzle/db";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { name, email } = await req.json();

//   if (!name || !email) {
//     return NextResponse.json({ message: "Please fill all the fields" });
//   }

//   await db.insert(user).values({
//     name,
//     email,
//   })
// }