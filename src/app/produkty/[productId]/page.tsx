import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import axios from "axios";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CarouselSection from "@/components/Products-Components/carousel-section";
import AddButton from "@/components/Add-button";

type Props = {
  params: {
    productId: string;
  };
};
type Product =
  | {
      imageUrl: string;
      name: string;
      description: string;
      price: string;
      family: string;
      memory: string;
    }
  | undefined;

const fetchData = async (productId: string) => {
  const respone = await axios.get(
    `http://localhost:3000/api/products/${productId}`
  );
  return respone.data.product as Product;
};

const page = async ({ params }: Props) => {
  const productId = params.productId;
  const Product = await fetchData(productId);
  if (!Product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <NavBar />

      <div className="px-20 py-16 flex gap-16">
        <div className="flex-1 flex justify-center">
          <CarouselSection params={{ productId }} />
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <h2 className="text-3xl">{Product.name}</h2>
          <p className="text-balance font-semibold">{Product.description}</p>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{Product.price}</h1>
            <AddButton productId={productId} />
          </div>
          <Accordion type="single" collapsible className="sm:max-w-[300px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>Specyfikacje</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <span>Socket: {Product.memory} GB</span>
                  <span>Family: {Product.family}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
