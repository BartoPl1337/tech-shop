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

const navigation_section = () => {
  return (
    <div className="space-y-6 ring-1 py-6 px-4">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">Filtry</h2>
        <Filter />
      </div>
      <Accordion type="multiple">
        {categories.map((category) => (
          <AccordionItem value={category.value} key={category.value} className="border-b border-gray-950">
            <AccordionTrigger>{category.catergory}</AccordionTrigger>
            {category.mark.map((mark) => (
              <AccordionContent
                className="flex items-center gap-2"
                key={mark.name}
              >
                <Checkbox id={mark.name} />
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
