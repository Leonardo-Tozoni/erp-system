"use client";

import { SearchIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import CardContainer from "../shared/CardContainer";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import TableCustomerRegister from "./TableCustomerRegister";

export default function CustomerRegister() {
  
  const form = useForm();
  
  return (
    <CardContainer>
      <div className="py-10">
        <Form {...form}>
          <FormField 
          name={"Nome do Cliente"}
          render={() => (
            <div>
              <p className="py-8 font-semibold text-5xl">Clientes</p>
            <div className="flex gap-2 justify-between">
            <FormItem>
              <FormLabel>Tipo de Cliente</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-110">
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
              <FormLabel>Pesquisar</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Input placeholder="Pesquise aqui..." className="w-260" />
                  <Button>
                    <SearchIcon />
                  </Button>
                </div>
              </FormControl>
            </FormItem>
            </div>
          </div>
          )} />
        </Form>
      </div>
      <TableCustomerRegister />
    </CardContainer>
  );
}