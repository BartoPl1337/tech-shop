import React from "react";
import NavigationSection from "./navigation-section";
import ProductSection from "./products-section";

const productPage = () => {
  return (
    <div className="p-24 space-y-12">
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-2xl">
          Wszystkie podzespoły do twojej dyspozycji
        </h1>
        <span className="text-xl">
          Spraw sobie najlepszy sprzęt i zostań mistrzem
        </span>
      </div>
      <div className="flex gap-24">
        <NavigationSection />
        <ProductSection />
      </div>
    </div>
  );
};

export default productPage;
