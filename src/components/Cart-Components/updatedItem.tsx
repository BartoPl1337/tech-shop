"use client";
import axios from "axios";
import { refetchStore } from "../refetch-store";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useEffect } from "react";

const FormSchema = z.object({
  quantity: z.number().min(1).max(100),
});

const UpdatedItem = ({
  productId,
  itemQuantity,
}: {
  productId: string;
  itemQuantity: number;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      quantity: itemQuantity,
    },
  });
  const { refetch } = refetchStore();

  useEffect(() => {
    form.setValue("quantity", itemQuantity);
  }, [itemQuantity, form]);

  const handleUpdate = async (data: z.infer<typeof FormSchema>) => {
    const response = await axios.patch("/api/cart", {
      productId,
      quantity: data.quantity,
    });
    refetch();
  };

  return (
    <Form {...form}>
      <form
        className="space-y-8 flex items-center gap-4"
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  value={field.value}
                  min={1}
                  max={100}
                  className="max-w-14"
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  onBlur={form.handleSubmit(handleUpdate)}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
export default UpdatedItem;
