"use client";

import {
  Sheet,
  SheetClose,
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";

interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

const CartPopUp = () => {
  const session = authClient.useSession();
  const user = session.data?.user;

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<CartItem[]>("/api/cart");
      setCartItems(response.data);
    };
    fetchData();
  }, [user]);

  if (!user) {
    return <h1>Zaloguj się</h1>;
  }

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  const sum = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <Sheet>
      <SheetTrigger className="relative flex items-center">
        <ShoppingCart size={24} />
        {cartItems.length > 0 && (
          <span className="absolute -top-3 -right-3 bg-green-900 text-white text-xs px-1.5 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Koszyk</SheetTitle>
          <ScrollArea className="rounded-md h-[850px]">
            <SheetDescription>
              {cartItems.length > 0 ? (
                <ul className="space-y-4">
                  {cartItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      )}
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p>Ilość: {item.quantity}</p>
                        <p className="text-sm text-gray-600">
                          {item.price * item.quantity}.00 PLN
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>Koszyk jest pusty</span>
              )}
            </SheetDescription>
          </ScrollArea>
        </SheetHeader>
        <SheetClose asChild>
          <div className="flex items-center justify-between mt-6">
            <h1 className="font-bold text-lg text-black">Suma: {sum}.00</h1>
            <Button type="submit">Kup teraz</Button>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default CartPopUp;
