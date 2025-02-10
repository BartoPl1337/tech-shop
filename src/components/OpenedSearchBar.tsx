import Link from "next/link";
import React from "react";

type SearchBarProps = {
  name: string;
};

const OpenedSearchBar = ({ name }: SearchBarProps) => {
  return <Link href="/" className="font-semibold">{name}</Link>;
};

export default OpenedSearchBar;
