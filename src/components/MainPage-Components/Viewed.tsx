"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import z from "zod";

const productsSchema = z.object({
  name: z.string(),
  price: z.number(),
  image: z.string(),
});

type Product = z.infer<typeof productsSchema>;

const Odwiedzane = () => {
  const [produtcs, setProducts] = useState<
    {
      name: string;
      price: number;
    }[]
  >([]);
  const [data, setData] = useState<
    {
      name: string;
      price: number;
    }[]
  >([]);
  const [value, setValue, removeValue] = useLocalStorage<Product[] | null>(
    "visitedProducts",
    null
  );
  useEffect(() => {
    if (value === null) {
      return;
    }
    const fetchData = async () => {
      const respone = await axios.get("/api/products");
      const parsedData = productsSchema.array().parse(respone.data);
      setData(parsedData);
    };
    fetchData();

    value.forEach((element) => {
      data.find((product) => {
        if (product.name === element.name) {
          setProducts((prev) => [...prev, product]);
        }
      });
    });
  }, []);
  return (
    <Swiper slidesPerView={5} spaceBetween={20} className="h-[350px]">
      {[...data]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
        .map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative border-2 aspect-square rounded-xl"
          >
            <Link
              href="/"
              className="w-full flex flex-col rounded-xl p-4 h-full"
            >
              <img
                src="swiper2.png"
                alt="picture"
                className="rounded-lg h-[220px] object-cover"
              />
              <div className="grid content-between h-[130px]">
                <h4 className="mt-2">{item.name}</h4>
                <p>{item.price} zł</p>
                <button className="rounded-full hover:bg-green-200 absolute p-2 bottom-2 right-3">
                  <ShoppingBasket />
                </button>
              </div>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Odwiedzane;
