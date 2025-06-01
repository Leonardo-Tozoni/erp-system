"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableCustomerRegister() {
  const IColumns = [
    {
      accessorKey: "name",
      header: "Nome do Cliente",
      size: 200,
    },
    {
      accessorKey: "type",
      header: "Tipo de Cliente",
      size: 100,
    },
    {
      accessorKey: "document",
      header: "CPF/CNPJ",
      size: 150,
    },
    {
      accessorKey: "registrationDate",
      header: "Data de Cadastro",
      size: 150,
    },
    {
      accessorKey: "actions",
      header: "Ações",
      size: 100,
    },
  ];

  return (
    <div className="border rounded-md">
      <Table className="border-collapse">
        <TableHeader className="sticky top-0 bg-background z-10">
          <TableRow className="border-b">
            {IColumns.map((column) => (
              <TableHead
                key={column.accessorKey}
                style={{ width: `${column.size}px` }}
                className="border-r last:border-r-0"
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="block h-[50vh] overflow-y-auto">
          <TableRow className="border-b table-row">
            <TableCell colSpan={IColumns.length} className="text-center border-r last:border-r-0">
              Nenhum dado disponível
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}