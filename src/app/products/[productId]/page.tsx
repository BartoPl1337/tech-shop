import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import axios from "axios";

type Props = {
  params: {
    productId: string;
  };
};
type Product =
  | {
      imageUrl: string;
      name: string;
      id: string;
      userId: string | null;
      description: string;
      price: string;
      family: string;
      socket: string;
      threads: number;
    }
  | undefined;

const fetchData = async (productId: string) => {
  const respone = await axios.get(
    `http://localhost:3000/api/products/${productId}`
  );
  return respone.data.product as Product;
};

const page = async ({ params }: Props) => {
  const { productId } = params;
  console.log(productId);
  const Product = await fetchData(productId);
  if (!Product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <NavBar />

      <div className="px-20 py-16 flex gap-16">
        <img src={Product.imageUrl} alt="" className="flex-1 h-96" />
        <div className="flex-1  flex flex-col justify-center">
          <h2>{Product.name}</h2>
          <form>
            <Button>Dodaj do koszyka</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
