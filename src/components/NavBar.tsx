import React from "react";
import { Heart, Phone, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="px-16 py-8 flex items-center shadow-xl w-full">
      <div className="flex-1">
        <Link href="/" className="font-bold text-3xl">
          GuguGaga
        </Link>
      </div>

      <SearchBar />

      <div className="flex-1 flex justify-end">
        <ul className="flex gap-5">
          <li>
            <Phone />
          </li>
          <li>
            <Heart />
          </li>
          <li>
            <User />
          </li>
          <li className="flex items-center gap-2">
            <ShoppingCart />
            <span>0.00 zł</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;