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
            <FormItem>
              <FormLabel>CEP</FormLabel>
              <FormControl>
                <Input className="w-80" placeholder="Digite o CEP..." />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input className="w-200" placeholder="Digite o endereço completo..." />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input className="w-110" placeholder="Digite a cidade..." />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <FormControl>
                <Input className="w-55" placeholder="Digite o Estado..." />
              </FormControl>
            </FormItem>
            </div>
          </div>
          )} />
        </Form>
    </div>
  );
}