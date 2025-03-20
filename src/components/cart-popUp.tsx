"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const CartPopUp = () => {
  const session = authClient.useSession();
  const user = session.data?.user;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const response = await axios.get("/api/cart");
      setCartItems(response.data);
    };

    fetchData();
  }, [user]);

  if (!user) {
    return <h1>Zaloguj się</h1>;
  }
console.log(cartItems)
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Koszyk</SheetTitle>
          <SheetDescription>
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.productId} - {item.quantity}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Koszyk jest pusty</p>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartPopUp;
