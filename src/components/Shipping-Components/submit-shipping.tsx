"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { refetchStore } from "../refetch-store";
import { authClient } from "@/lib/auth-client";
import axios from "axios";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

const FormSchema = z.object({
  voucher: z.string().min(2, {
    message: "Bon jest niepoprwany",
  }),
});

const SubmitShipping = () => {
  const session = authClient.useSession();
  const user = session.data?.user;

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { refetchValue } = refetchStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      voucher: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

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
    <div className="w-1/2 flex flex-col gap-4 rounded-lg border py-4 px-6">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">
            Wpisz kod promocjny!
          </AccordionTrigger>
          <AccordionContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex justify-between gap-1"
              >
                <FormField
                  control={form.control}
                  name="voucher"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="Wpisz kod promocyjny" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Aktywuj</Button>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="font-medium">Do zapłaty</p>
          <p className="font-bold">{sum.toFixed(2)} zł</p>
        </div>

        <div className="flex flex-col gap-1">
          <Link href="/payment">
            <Button className="bg-green-500 hover:bg-green-700 w-full">
              Przejdz do płatności
            </Button>
          </Link>
          <Button variant={"outline"}>Oblicz ratę</Button>
        </div>

        <span className="text-xs font-semibold text-center">
          Nie zwlekaj, produkty w koszyku nie są rezerwowane.
        </span>
      </div>
    </div>
  );
};
export default SubmitShipping;
