'use client'
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { categories } from "../../data.js";
import { Filter } from "lucide-react";
import { useAtom } from "jotai";
import { selectedBrandsAtom } from "../../atoms/filterAtoms";

const navigation_section = () => {
  const [selectedBrands, setSelectedBrands] = useAtom(selectedBrandsAtom);

  const handleCheckboxChange = (markName: string) => {
    const updatedBrands = selectedBrands.includes(markName)
      ? selectedBrands.filter((brand) => brand !== markName)
      : [...selectedBrands, markName];

    setSelectedBrands(updatedBrands);
  };
  return (
    <div className="space-y-8 w-72">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">Filtry</h2>
        <Filter />
      </div>
      <Accordion type="multiple">
        {categories.map((category) => (
          <AccordionItem
            value={category.value}
            key={category.value}
            className="border-b border-gray-950"
          >
            <AccordionTrigger className="text-lg">{category.catergory}</AccordionTrigger>
            {category.mark.map((mark) => (
              <AccordionContent
                className="flex items-center gap-2"
                key={mark.name}
              >
                <Checkbox
                  id={mark.name}
                  checked={selectedBrands.includes(mark.name)}
                  onCheckedChange={() => handleCheckboxChange(mark.name)}
                />
                <Label htmlFor={mark.name}>{mark.name}</Label>
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default navigation_section;
