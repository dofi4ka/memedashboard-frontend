"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Главная" },
  { href: "/analytics", label: "Аналитика" },
  { href: "/trends", label: "Тренды" },
  { href: "/about", label: "О проекте" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <div className="h-[69px] w-full" />
      <nav className="fixed top-0 left-0 w-full bg-background border-b border-border p-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Мобильное меню */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-2/3 max-w-[400px]">
              <SheetHeader>
                <SheetTitle>Меню навигации</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 px-4">
                {navigationLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`text-lg font-medium hover:text-primary transition-colors ${
                      pathname === href
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Десктопное меню */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map(({ href, label }) => (
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
    </>
  );
}
