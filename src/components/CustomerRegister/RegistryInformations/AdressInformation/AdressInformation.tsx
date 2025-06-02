import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Form, useForm } from "react-hook-form";

export default function AdressInformation() {

  const form = useForm();
  return(
  <div style={{ width: "100%", height: "20%", boxSizing: "border-box", overflow: "auto" }}>
      <Form {...form}>
        <FormField 
        name={"Nome do Cliente"}
        render={() => (
          <div>
            <div className="flex gap-4 justify-between">
            <FormItem className="w-full sm:w-[48%]">
              <FormLabel>CEP</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Digite o CEP..." />
              </FormControl>
            </FormItem>
            <FormItem className="w-full sm:w-[48%]">
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Digite o endereço completo..." />
              </FormControl>
            </FormItem>
            <FormItem className="w-full sm:w-[48%]">
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Digite a cidade..." />
              </FormControl>
            </FormItem>
            <FormItem className="w-full sm:w-[48%]">
              <FormLabel>Estado</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Digite o Estado..." />
              </FormControl>
            </FormItem>
            </div>
          </div>
          )} />
        </Form>
    </div>
  );
}