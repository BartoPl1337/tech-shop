"use client";
import axios from "axios";
import { useAtom } from "jotai";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { selectedBrandsAtom } from "../../atoms/filterAtoms";

type Product = {
  name: string;
  price: number;
  image: string;
  family: string;
  id: string;
};

const products_section = () => {
  const [selectedBrands] = useAtom(selectedBrandsAtom);
  const [data, setData] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const respone = await axios.get(`/api/products`);
      setData(respone.data);
    };
    fetchData();
  }, []);
  const filteredData =
    selectedBrands.length > 0
      ? data.filter((item) => selectedBrands.includes(item.family))
      : data;
  return (
    <div className="grid grid-cols-3 gap-8">
      {filteredData.map((item) => (
        <Link
          href={`/products/${item.id}`}
          key={item.id}
          className="overflow-hidden rounded-xl border text-start ring-primary transition-all hover:shadow-sm hover:ring-2"
        >
          <div className="flex justify-center">
            <img
              src={item.image}
              alt=""
              className="object-cover object-center"
            />
          </div>
          <div className="p-4 flex flex-col gap-6">
            <h1 className=" font-semibold text-balance">{item.name}</h1>
            <span className="font-semibold">{item.price} zł</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default products_section;
