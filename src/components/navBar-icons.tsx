import { auth } from "@/lib/auth";
import { Heart, LogOut, Phone, ShoppingCart, User } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import CartPopUp from "./cart-popUp";

export default async function NavBarIcons() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="flex-1 flex justify-end">
      <ul className="flex gap-5 items-center">
        {session ? (
          <li className="flex flex-col">
            <span className="text-xs text-gray-400">Witamy</span>
            <span className="text-sm font-bold">{user?.name}</span>
          </li>
        ) : null}
        <li>
          <Phone />
        </li>
        <li>
          <Heart />
        </li>
        <li>
          {session ? (
            <form
              action={async () => {
                "use server";
                await auth.api.signOut({
                  headers: await headers(),
                });
                redirect("/");
              }}
              className="flex"
            >
              <button type="submit">
                <LogOut color="red"/>
              </button>
            </form>
          ) : (
            <Link href="/sign-in">
              <User />
            </Link>
          )}
        </li>
        <li className="flex items-center gap-2">
          <CartPopUp />
          <span>0.00 zł</span>
        </li>
      </ul>
    </div>
  );
}
