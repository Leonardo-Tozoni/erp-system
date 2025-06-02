"use client";

import { DatePicker } from "@/components/shared/DatePicker";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";


export default function GeneralInformation() {

  const form = useForm();
  
  return (
    <div style={{ width: "100%", height: "20%", boxSizing: "border-box", overflow: "auto" }}>
      <Form {...form}>
        <FormField 
        name={"Nome do Cliente"}
        render={() => (
          <div>
            <div className="flex justify-between">
            <FormItem>
              <FormLabel>Tipo de Cliente</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-50">
                    <SelectValue placeholder="Selecione..."/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Pessoa Física</SelectItem>
                    <SelectItem value="legal">Pessoa Jurídica</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Nome Completo / Razão Social</FormLabel>
              <FormControl>
                <Input className="w-110" placeholder="Digite o nome do cliente..." />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Nome Fantasia (se for Jurídica)</FormLabel>
              <FormControl>
                <Input className="w-70" placeholder="Digite o nome fantasia..." />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>CPF / CNPJ</FormLabel>
              <FormControl>
                <Input className="w-80" placeholder="Digite o CPF/CNPJ..." />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Inscrição Estadual</FormLabel>
              <FormControl>
                <Input className="w-55" placeholder="Digite sua IE..." />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Data de Cadastro</FormLabel>
              <FormControl>
                <DatePicker selected={new Date()} disabled />
              </FormControl>
            </FormItem>
            </div>
          </div>
          )} />
        </Form>
    </div>
  );
}