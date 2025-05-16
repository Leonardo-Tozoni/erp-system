import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen font-[family-name:var(--font-geist-sans)] bg-background">
      <LoginForm />
    </div>
  );
}