"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-background border-b border-border p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {[
            { href: "/", label: "Главная" },
            { href: "/analytics", label: "Аналитика" },
            { href: "/trends", label: "Тренды" },
            { href: "/about", label: "О проекте" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg font-medium hover:text-primary transition-colors ${
                pathname === href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline">Войти</Button>
          <Button variant="default">Зарегистрироваться</Button>
        </div>
      </div>
    </nav>
  );
}
