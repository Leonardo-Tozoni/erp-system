import api from "@/_core/infrastructure/api/config";

export async function getTable(): Promise<void> {
  return api.get("/api/create-customer")
}