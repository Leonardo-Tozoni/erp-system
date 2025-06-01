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

export type IFilters = {
  name: string;
  search: string;
}

export type IActions = {
  setData: (fn: (state: ICreateCustomer) => void) => void;
  fetchTableData: () => void;
}

export type ICreateCustomer = {
  table: ITable;
  formFilter: IFilters | null;
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

export const initialFilters: IFilters = {
  name: "",
  search: "",
}

// FIXME
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useCreateCustomerStore = create<ICreateCustomer>()((set, get) => ({
  // State
  table: initialTable,
  formFilter: initialFilters,

  // Setters
  setData: fn => set(produce(fn)),
  // Getters
  fetchTableData: async () => {}

  // Actions
}));

export default useCreateCustomerStore;