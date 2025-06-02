import api from "@/_core/infrastructure/api/config";
import paramsSerializer from "@/config/axios/paramSerializer";

export interface ICreateCustomerParams {
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

export async function createCustomer(params: ICreateCustomerParams): Promise<void> {
  return api.post("/api/Customer/AddCustomer", params, {paramsSerializer})
}