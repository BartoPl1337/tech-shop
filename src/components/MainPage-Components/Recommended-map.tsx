"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";

const RecommendedMap = () => {
  const [data, setData] = useState<
    {
      name: string;
      price: number;
      image: string;
    }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/products");
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <Swiper slidesPerView={5} spaceBetween={20}>
      {[...data]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
        .map((item, index) => (
          <SwiperSlide
            key={index}
            className="border-2 rounded-xl h-full flex flex-col relative"
          >
            <Link
              href="/products"
              className="w-full h-full flex flex-col rounded-xl p-4"
            >
              <img
                src={item.image}
                alt="picture"
                className="rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between flex-1 gap-12">
                <h4 className="mt-2 line-clamp-2 font-medium">{item.name}</h4>
                <p className="font-semibold">{item.price} zł</p>
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

export default RecommendedMap;
