'use client';

import { BookPlus, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function SidebarMenu() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Card
      className={`fixed top-0 left-0 h-screen ${
        isCollapsed ? "w-16" : "w-64"
      } z-50 rounded-none shadow-none bg-cyan-800 transition-all duration-300`}
    >
      <CardContent className="p-5 flex flex-col items-center h-full">
        <Button
          variant="ghost"
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MenuIcon size={18} />
        </Button>

        {!isCollapsed && (
          <Image alt="Barber Logo" src="/logo.png" height={36} width={120} />
        )}

        <div className="flex flex-col justify-between h-full w-full mt-8">
          <nav className="flex flex-col gap-4 w-full">
            <Button
              variant="ghost"
              className={`gap-2 w-full justify-start text-white ${
                isCollapsed ? "tooltip tooltip-right" : ""
              }`}
              asChild
              data-tooltip="Início"
            >
              <Link href="/">
                <HomeIcon size={18} />
                {!isCollapsed && "Início"}
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`gap-2 w-full justify-start text-white ${
                isCollapsed ? "tooltip tooltip-right" : ""
              }`}
              asChild
              data-tooltip="Cadastro de Clientes"
            >
              <Link href="/customer">
                <BookPlus size={18} />
                {!isCollapsed && "Cadastro de Clientes"}
              </Link>
            </Button>
          </nav>

          <div className="w-full mt-8">
            <div className="border-t border-gray-200 mb-4" />
            <Button
              variant="ghost"
              className={`gap-2 w-full justify-start text-white ${
                isCollapsed ? "tooltip tooltip-right" : ""
              }`}
              data-tooltip="Sair"
            >
              <LogOutIcon size={18} />
              {!isCollapsed && "Sair"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}