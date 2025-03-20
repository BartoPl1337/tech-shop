import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import NavBarIcons from "./navBar-icons";

const NavBar = () => {
  return (
    <div className="px-16 py-8 flex items-center shadow-xl w-full">
      <div className="flex-1">
        <Link href="/" className="font-bold text-3xl">
          GuguGaga
        </Link>
      </div>
      <SearchBar />
      <NavBarIcons />
    </div>
  );
};

export default NavBar;
