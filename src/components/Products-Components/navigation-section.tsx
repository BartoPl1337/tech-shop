"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { categories } from "../../data.js";
import { Filter } from "lucide-react";
import { useAtom } from "jotai";
import { selectedBrandsAtom } from "../../atoms/filterAtoms";
import axios from "axios";

const navigation_section = () => {
  const [selectedBrands, setSelectedBrands] = useAtom(selectedBrandsAtom);
  const [families, setFamilies] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      const respone = await axios.get("/api/families");
      setFamilies(respone.data);
    };
    fetchData();
  }, []);
  const handleCheckboxChange = (markName: string) => {
    // const updatedBrands = selectedBrands.includes(markName)
    //   ? selectedBrands.filter((brand) => brand !== markName)
    //   : [...selectedBrands, markName];
    // setSelectedBrands(updatedBrands);
    setSelectedBrands((prev) =>
      prev.includes(markName)
        ? prev.filter((brand) => brand !== markName)
        : [...prev, markName]
    );
  };
  return (
    <div className="space-y-8 w-72">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">Filtry</h2>
        <Filter />
      </div>
      <Accordion type="multiple">
        {Object.entries(families).map(([type, brands]) => (
          <AccordionItem
            value={type}
            key={type}
            className="border-b border-gray-950"
          >
            <AccordionTrigger className="text-lg">{type}</AccordionTrigger>
            {brands.map((brand) => (
              <AccordionContent className="flex items-center gap-2" key={brand}>
                <Checkbox
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => handleCheckboxChange(brand)}
                />
                <Label htmlFor={brand}>{brand}</Label>
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default navigation_section;
