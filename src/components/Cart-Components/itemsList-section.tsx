"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authClient } from "@/lib/auth-client";
import axios from "axios";
import { useEffect, useState } from "react";
import { refetchStore } from "../refetch-store";
import { Button } from "../ui/button";
import { Heart, Trash } from "lucide-react";
import { Input } from "../ui/input";

interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

const ItemsListSection = () => {
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

  return (
    <Table>
      <TableCaption>Twój koszyk</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-lg font-bold">Koszyk</TableHead>
          <TableHead></TableHead>
          <TableHead className="text-right flex items-center">
            <Button variant={"ghost"}>
              <Heart />
              <span>Dodaj do ulubionych</span>
            </Button>
            <Button variant={"ghost"}>
              <Trash />
              <span>Wyczyść koszyk</span>
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <img
                src={item.image}
                alt={item.name}
                className="size-24 object-cover"
              />
            </TableCell>
            <TableCell className="font-medium">
              <p>{item.name}</p>
            </TableCell>
            <TableCell className="font-medium">
              <div className="flex items-center justify-end gap-1">
                <p className="mr-2">{item.price}</p>
                <Input
                  type="number"
                  value={item.quantity}
                  min={1}
                  max={100}
                  className="max-w-14"
                />
                <Button variant={"ghost"} className="size-8">
                  <Heart />
                </Button>
                <Button variant={"ghost"} className="size-8">
                  <Trash />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ItemsListSection;
