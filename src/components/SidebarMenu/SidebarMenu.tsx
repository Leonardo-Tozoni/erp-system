'use client';

import { BookPlus, HomeIcon, LogOutIcon } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function SidebarMenu () {
  return (
    <Card className="fixed top-0 left-0 h-screen w-64 z-50 rounded-none shadow-none bg-cyan-800">
      <CardContent className="p-5 flex flex-col items-center h-full">
        <Image alt="Barber Logo" src="/logo.png" height={36} width={120} />

        <div className="flex flex-col justify-between h-full w-full mt-8">
          <nav className="flex flex-col gap-4 w-full">
            <Button variant="ghost" className="gap-2 w-full justify-start text-white" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
            <Button variant="ghost" className="gap-2 w-full justify-start text-white" asChild>
              <Link href="/customer">
                <BookPlus size={18}/>
                Cadastro de Clientes
              </Link>
            </Button>
          </nav>

          <div className="w-full mt-8">
            <div className="border-t border-gray-200 mb-4" />
            <Button variant="ghost" className="gap-2 w-full justify-start text-white">
              <LogOutIcon size={18} />
              Sair
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}