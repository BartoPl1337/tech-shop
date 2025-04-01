import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { FormSchema } from "./form-compare";

type Props = {
  form: UseFormReturn<FormSchema>;
};
const DeliveryChosing = ({ form }: Props) => {
  return (
    <div className="rounded-lg p-4 border-2">
      <h4 className="font-bold text-xl">Sposób dostawy</h4>
      <FormField
        control={form.control}
        name="delivery"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>
              Wybierz najkorzystniejszy dla ciebie sposób dostawy
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="inpost" />
                  </FormControl>
                  <FormLabel className="font-normal">Inpost</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="kurier" />
                  </FormControl>
                  <FormLabel className="font-normal">Kurier</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="salon" />
                  </FormControl>
                  <FormLabel className="font-normal">Salon</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
export default DeliveryChosing;
