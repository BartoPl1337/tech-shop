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
import Link from "next/link";
import { refetchStore } from "./refetch-store";

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
  const { refetchValue } = refetchStore();

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      const response = await axios.get<CartItem[]>("/api/cart");
      setCartItems(response.data);
    };
    fetchData();
  }, [user, refetchValue]);

  const sum = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative flex items-center">
          <ShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-3 -right-3 bg-green-900 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Koszyk</SheetTitle>
          <ScrollArea className="rounded-md h-[850px]">
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
                      <p className="font-semibold line-clamp-2">{item.name}</p>
                      <p>Ilość: {item.quantity}</p>
                      <p className="text-sm text-gray-600">
                        {(item.price * item.quantity).toFixed(2)} PLN
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <span>Koszyk jest pusty</span>
            )}
          </ScrollArea>
        </SheetHeader>
        <SheetClose asChild>
          <div className="flex items-center justify-between mt-6">
            <p className="font-semibold text-lg text-black ">Suma: {sum.toFixed(2)} PLN</p>
            <Link href="/koszyk">
              <Button type="submit">Kup teraz</Button>
            </Link>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default CartPopUp;
