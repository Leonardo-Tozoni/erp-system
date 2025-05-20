'use client';

import Header from "@/components/Header.tsx/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main style={{ marginLeft: 256 }}> {/* 256px = largura do Header */}
          {children}
        </main>
      </body>
    </html>
  );
}