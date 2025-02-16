"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const products_section = () => {
  const [data, setData] = useState<
    {
      name: string;
      price: number;
      image: string;
    }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const respone = await axios.get("/api/products");
      setData(respone.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <img src={item.image} alt="product" />
        </div>
      ))}
    </div>
  );
};

export default products_section;
