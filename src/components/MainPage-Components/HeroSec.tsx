'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const HeroSec = () => {
  return (
    <div className="py-24 flex justify-center">
      <div className="relative w-[1401px]">
        <Swiper
          rewind={true}
          slidesPerView={1}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          <SwiperSlide>
            <Link href="/">
              <img src="swiper1.png" alt="" className="mx-auto w-full h-auto" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <img src="swiper2.png" alt="" className="mx-auto w-full h-auto" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <img src="swiper3.png" alt="" className="mx-auto w-full h-auto" />
            </Link>
          </SwiperSlide>
        </Swiper>

        <button className="custom-prev absolute top-1/2 -translate-y-1/2 start-4 rounded-full border-2 text-orange-600 hover:text-white border-orange-600 hover:bg-orange-600 p-2 z-10">
          <ChevronLeft size={32} />
        </button>
        <button className="custom-next absolute top-1/2 -translate-y-1/2 end-4 rounded-full border-2 text-orange-600 hover:text-white border-orange-600 hover:bg-orange-600 p-2 z-10">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default HeroSec;
