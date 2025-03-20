'use client'
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import axios from "axios";

const AddButton = ({
  productId,
}: {
  productId: string;
}) => {
const session = authClient.useSession()
const user = session.data?.user
if(!user){
    return <h1>Zaloguj się</h1>
}
const handleAddToCart = async () => {
      const response = await axios.post("/api/cart", {
        productId,
        quantity: 1,
        userId: user.id,
      });
  };
  return <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>;
};
export default AddButton;