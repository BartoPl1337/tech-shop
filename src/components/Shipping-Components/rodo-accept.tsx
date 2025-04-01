import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FormSchema } from "./form-compare";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<FormSchema>;
};
export function RodoAccept({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="accept"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Zgody i oświadczenia</FormLabel>
            <FormDescription>
              Wyrazam zgode na przetwarzanie moich danych osobowych przez 24
              miesiące.
            </FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
}
