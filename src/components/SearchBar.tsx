"use client";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import OpenedSearchBar from "./OpenedSearchBar";
import axios from "axios";

const SearchBar = () => {
  const [search, setSearch] = useDebounceValue("", 300);
  const [input, setInput] = useState("");
  const [data, setData] = useState<
    {
      name: string;
      price: number;
      description: string;
    }[]
  >([]);

  useEffect(() => {
    setSearch(input); // Wykrywa zmiany w input i przypisuje je do search
  }, [input]);

  useEffect(() => {
    const fetchData = async () => {
      if (search === "") {
        return false;
      }

      const response = await axios.get(`/api/products?name=${search}`);
      setData(response.data);
    };
    fetchData();
  }, [search]);
  return (
    <div className="flex-1 flex flex-col relative">
      <form action="" className="flex items-center relative">
        <input
          type="search"
          className="border-2 w-full border-black rounded-xl p-2 outline-none"
          placeholder="Wyszukaj"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="absolute right-0 p-2 rounded-xl">
          <Search />
        </button>
      </form>

      {search.length > 1 && (
        <div className="flex flex-col absolute top-12 w-full px-4 z-10 space-y-2 bg-slate-150 shadow-lg p-2 bg-slate-200/20 rounded-xl">
          <h1 className="font-bold">Podobne wyszukiwania</h1>
          {data.length === 0 && <p className="font-semibold">Brak wyników</p>}
          {data.slice(0, 5).map((item, index) => (
            <OpenedSearchBar key={index} name={item.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
