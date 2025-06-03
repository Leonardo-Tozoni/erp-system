"use client";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export default function ObservationInformation() {
  const form = useForm();
  return(
    <div style={{ width: "100%", boxSizing: "border-box", overflow: "auto" }}>
      <Form {...form}>
        <FormField 
          name={"Nome do Cliente"}
          render={() => (
            <div>
              <FormItem className="w-full">
                <FormLabel>Observação</FormLabel>
                <FormControl>
                  <Textarea className="w-full h-25" placeholder="Digite uma observação do cliente..." />
                </FormControl>
              </FormItem>
            </div>
          )} 
        />
      </Form>
    </div>
  );
}