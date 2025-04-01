import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormSchema } from "./form-compare";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<FormSchema>;
};
export function PaymentMethod({ form }: Props) {
  return (
    <div className="border-2 rounded-lg p-4">
      <FormField
        control={form.control}
        name="payment"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="font-bold text-xl">Płatność</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="online" />
                  </FormControl>
                  <FormLabel className="font-normal">Płatność online</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="card" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Karta płatnicza online
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="blik" />
                  </FormControl>
                  <FormLabel className="font-normal">BLIK</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="delivery" />
                  </FormControl>
                  <FormLabel className="font-normal">Przy odbiorze</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="rats" />
                  </FormControl>
                  <FormLabel className="font-normal">Raty</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="giftcard" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Karta podarunkowa
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="paypo" />
                  </FormControl>
                  <FormLabel className="font-normal">PayPo</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
