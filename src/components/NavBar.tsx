import React from "react";
import { Heart, Phone, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="px-16 py-8 flex items-center">
      <h1 className="font-bold text-3xl pr-6 flex-1">GuguGaga</h1>
      
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
