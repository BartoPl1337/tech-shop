import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSec = () => {
  return (
    <div className="flex">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <img src="myWebsite.svg" alt="" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <img src="computer.svg" alt="" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <img src="telephone.svg" alt="" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      {/* <div className="flex-1 flex justify-center">
        <button className="bg-blue-500 text-white p-4 rounded-full font-bold text-lg ">
            Sprawdz nasze oferty
        </button>
      </div> */}
    </div>
  );
};

export default HeroSec;
