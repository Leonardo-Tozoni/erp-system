import api from "@/_core/infrastructure/api/config";

export async function createCustomer(): Promise<void> {
  return api.post("/api/Customer/AddCustomer")
}