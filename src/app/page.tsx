'use client';

import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen font-[family-name:var(--font-geist-sans)] bg-background">
      <SidebarMenu />
      {/* <LoginForm /> */}
    </div>
  );
}