"use client";

import useCreateCustomerStore from "@/zustand/useCreateCustomer";
import { SearchIcon } from "lucide-react";
import { useShallow } from "zustand/shallow";
import CardContainer from "../shared/CardContainer";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Form, FormControl, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import AdressInformation from "./RegistryInformations/AdressInformation";
import ContactInformation from "./RegistryInformations/ContactInformation";
import GeneralInformation from "./RegistryInformations/GeneralInformation";
import ObservationInformation from "./RegistryInformations/ObservationInformation";
import TableCustomerRegister from "./TableCustomerRegister";

import { useCallback } from "react";
import { useForm } from "react-hook-form";

export default function CustomerRegister() {
  
  const { isLoading, createCustomer} = useCreateCustomerStore(useShallow((state) => ({
    formFilter: state.formFilter,
    isLoading: state.createNewCustomer.isLoading,
    createCustomer: state.createCustomer
  })));

  const form = useForm();

  const handleSubmit = useCallback(async () => {
    await createCustomer();
  }, [createCustomer]);
  
  return (
    <CardContainer>
    <div className="py-10">
      <Form {...form}>
        <div>
          <div className="flex items-center justify-between">
            <p className="py-8 font-semibold text-5xl">Clientes</p>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="default" className="cursor-pointer bg-cyan-800">
                  Novo Cliente
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-1/2">
                <DrawerTitle className="pb- text-center text-lg">
                  Cadastro de Cliente
                </DrawerTitle>
                <div className="w-full h-full p-4 flex flex-col">
                  <GeneralInformation form={form}/>
                  <AdressInformation />
                  <ContactInformation />
                  <ObservationInformation />
                </div>
                <div className="flex flex-row gap-2 w-full px-4 pb-5 justify-end">
                  <Button className="mt-2 w-full sm:w-auto" variant="outline">
                    Cancelar
                  </Button>
                  <Button
                    className="mt-2 w-full sm:w-auto bg-cyan-800"
                    variant="default"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Salvando...
                      </span>
                    ) : (
                      "Salvar"
                    )}
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex flex-wrap gap-4 justify-between">
            <FormItem className="w-full sm:w-[48%]">
              <FormLabel>Tipo de Cliente</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Pessoa Física</SelectItem>
                    <SelectItem value="legal">Pessoa Jurídica</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
            <FormItem className="w-full sm:w-[48%]">
              <FormLabel>Pesquisar</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Input placeholder="Pesquise aqui..." className="w-full" />
                  <Button className="cursor-pointer w-full sm:w-auto bg-cyan-800" variant="default">
                    <SearchIcon className="text-white" />
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          </div>
        </div>
      </Form>
      </div>
      <TableCustomerRegister />
    </CardContainer>
  );
}