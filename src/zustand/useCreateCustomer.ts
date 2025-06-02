import { createCustomer, ICreateCustomerParams } from "@/services/createCustomerService";
import { produce } from "immer";
import { create } from "zustand";

export type ITableParams = {
  data: ITable[];
  page: number;
  pageSize: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export type ITable = {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  adress: string;
  city: string;
  country: string;
}

export type IFormFilters = {
  name: string;
  search: string;
  typeCustomer?: string;
  customerName?: string;
  nameFantasy?: string;
  cnpj?: string;
  ie?: string;
  creationDate?: Date;
  postalCode?: string;
  adress?: string;
  country?: string;
  state?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  contactName?: string;
  observation?: string;
}

export type ICreateNewCustomer = {
  isOpen: boolean;
  isLoading: boolean;
  isSuccessful: boolean;
  isError: boolean;
  message: string;
  disabled: boolean;
}

export type IActions = {
  setData: (fn: (state: ICreateCustomer) => void) => void;
  fetchTableData: () => void;
  createCustomer: () => Promise<void>;
}

export type ICreateCustomer = {
  table: ITable;
  formFilter: IFormFilters | null;
  formFilterInstance: Partial<IFormFilters> | null;
  createNewCustomer: ICreateNewCustomer;
} & IActions;

export const initialTable: ITable = {
  id: "",
  customerName: "",
  customerEmail: "",
  customerPhone: "",
  adress: "",
  city: "",
  country: "",
}

export const initialFilters: IFormFilters = {
  name: "",
  search: "",
}

export const initialICreateNewCustomer: ICreateNewCustomer = {
  isOpen: false,
  isLoading: false,
  isSuccessful: false,
  isError: false,
  message: "",
  disabled: false,
}

// FIXME
 
const useCreateCustomerStore = create<ICreateCustomer>()((set, get) => ({
  // State
  table: initialTable,
  formFilter: initialFilters,
  formFilterInstance: null,
  createNewCustomer: initialICreateNewCustomer,

  // Setters
  setData: fn => set(produce(fn)),
  // Getters
  fetchTableData: async () => {},

  // Actions
  createCustomer: async () => {
    const { setData, formFilterInstance } = get();

    const formValues = formFilterInstance || {};

    try {
      setData(state => {
        state.createNewCustomer.isLoading = true;
        state.createNewCustomer.isSuccessful = false;
        state.createNewCustomer.isError = false;
      });

      const params: ICreateCustomerParams = {
        typeCustomer: formValues.typeCustomer,
        customerName: formValues.customerName,
        nameFantasy: formValues.nameFantasy,
        cnpj: formValues.cnpj,
        ie: formValues.ie,
        creationDate: formValues.creationDate ? new Date(formValues.creationDate) : undefined,
        postalCode: formValues.postalCode,
        adress: formValues.adress,
        country: formValues.country,
        state: formValues.state,
        phone: formValues.phone,
        whatsapp: formValues.whatsapp,
        email: formValues.email,
        contactName: formValues.contactName,
        observation: formValues.observation,
      }

      await createCustomer(params);
      
      return Promise.resolve();
    } catch (error) {
      setData(state => {
        state.createNewCustomer.isLoading = false;
        state.createNewCustomer.isSuccessful = false;
        state.createNewCustomer.isError = true;
        state.createNewCustomer.message = error instanceof Error ? error.message : "An error occurred while creating the customer.";
      });
      return Promise.reject(error);
    }
  }
}));

export default useCreateCustomerStore;