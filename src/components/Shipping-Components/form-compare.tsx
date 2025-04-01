"use client";
import { useForm, UseFormReturn } from "react-hook-form";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import DeliveryChosing from "./delivery-chosing";
import { PaymentMethod } from "./payment-method";
import { RodoAccept } from "./rodo-accept";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  payment: z.enum(
    ["online", "card", "blik", "delivery", "rats", "giftcard", "paypo"],
    {
      required_error: "Prosze wybrac rodzaj płatności",
    }
  ),
  delivery: z.enum(["inpost", "kurier", "salon"], {
    required_error: "Prosze wybrac rodzaj dostawy",
  }),
  accept: z.boolean().default(false).optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
const FormCompare = () => {
  const form: UseFormReturn<FormSchema> = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accept: false,
    },
  });
  function onSubmit(data: FormSchema) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <DeliveryChosing form={form} />
        <PaymentMethod form={form} />
        <RodoAccept form={form} />
        <Button type="submit">Zatwierdz</Button>
      </form>
    </Form>
  );
};
export default FormCompare;
