import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function ContactInformation() {

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
              <FormLabel>Telefone Principal</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Digite o telefone..." />
              </FormControl>
            </FormItem>
            <FormItem className="w-full sm:w-[48%]">
              <FormLabel>WhatsApp</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Digite o whatsapp..." />
              </FormControl>
            </FormItem>
            <FormItem className="w-full sm:w-[48%]">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Digite o e-mail..." />
              </FormControl>
            </FormItem>
            <FormItem className="w-full sm:w-[48%]">
              <FormLabel>Pessoa de Contato</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Digite o nome da pessoa do contato..." />
              </FormControl>
            </FormItem>
            </div>
          </div>
          )} />
        </Form>
    </div>
  );
}