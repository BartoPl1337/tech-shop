import { db } from "@/drizzle/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/drizzle/schema";
import { headers } from "next/headers";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema,
  }),
  // advanced: {
  //   generateId: false,
  // },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false, //defaults to true
  },
});

export const getServerSession = async () => {
  return auth.api.getSession({ headers: await headers() });
};
