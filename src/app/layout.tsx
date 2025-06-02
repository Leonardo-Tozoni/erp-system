'use client';

import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <SidebarMenu />
        <main style={{ marginLeft: 256 }}>
          {children}
        </main>
      </body>
    </html>
  );
}