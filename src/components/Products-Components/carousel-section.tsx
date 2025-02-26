import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";

type Props = {
  params: {
    productId: string;
  };
};

type Product = {
  imageUrl: string;
}[];
const fetchData = async (productId: string) => {
  const respone = await axios.get(
    `http://localhost:3000/api/products/${productId}`
  );
  return respone.data.images as Product;
};

const CarouselSection = async ({ params }: Props) => {
  const { productId } = params;
  const Product = await fetchData(productId);
  console.log(Product);
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {Product.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={product.imageUrl} alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouselSection;
