import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import RecommendedMap from "./Recommended-map";

const Recommended = () => {
  return (
    <div className="mx-16 ring-1 shadow-lg rounded-lg my-8">
      <div className="p-8">
        <div className="flex justify-between px-8 items-center">
          <h1 className="text-xl font-bold">Polecamy</h1>
          <Link href='/produkty' className="flex gap-2 items-center">
            <h4 className="text-sm font-semibold">Pokaż wszystkie</h4>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="pt-4 flex">
            <RecommendedMap />
        </div>

      </div>
    </div>
  );
};

export default Recommended;
