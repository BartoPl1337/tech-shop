"use client";
import { authClient } from "@/lib/auth-client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";

const FormSchema = z.object({
  quantity: z.number().min(1).max(100),
});

const AddButton = ({ productId }: { productId: string }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const session = authClient.useSession();
  const user = session.data?.user;

  if (!user) {
    return <h1>Zaloguj się</h1>;
  }

  const handleAddToCart = async (data: z.infer<typeof FormSchema>) => {
    const response = await axios.post("/api/cart", {
      productId,
      quantity: data.quantity,
      userId: user?.id,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleAddToCart)}
        className="space-y-8 flex items-center gap-4"
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ilość</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={100}
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Dodaj do koszyka</Button>
      </form>
    </Form>
  );
};
export default AddButton;
