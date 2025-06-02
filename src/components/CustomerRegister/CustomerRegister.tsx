"use client";

import { SearchIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import CardContainer from "../shared/CardContainer";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import AdressInformation from "./RegistryInformations/AdressInformation";
import ContactInformation from "./RegistryInformations/ContactInformation";
import GeneralInformation from "./RegistryInformations/GeneralInformation";
import ObservationInformation from "./RegistryInformations/ObservationInformation";
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
              <div className="flex items-center justify-between">
                <p className="py-8 font-semibold text-5xl">Clientes</p>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="default" className="cursor-pointer bg-cyan-800">Novo Cliente</Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-[50vh]">
                    <DrawerTitle className="pb- text-center text-lg">Cadastro de Cliente</DrawerTitle>
                    <div className="w-full h-full p-4 flex flex-col">
                      <GeneralInformation />
                      <AdressInformation />
                      <ContactInformation />
                      <ObservationInformation />
                    </div>
                    <div className="flex flex-row gap-2 w-full px-4 pb-5 justify-end">
                      <Button className="mt-2" variant="outline">Cancelar</Button>
                      <Button className="mt-2 bg-cyan-800" variant="default">Salvar</Button>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
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
                    <Button className="cursor-pointer bg-cyan-800" variant="default">
                      <SearchIcon className="text-white"/>
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