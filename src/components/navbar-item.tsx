"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { NavbarCollections } from "@/mocks/navbar-collections";
import Link from "next/link";

export const NavbarItem = () => {
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center gap-x-12">
      {NavbarCollections.map((nav, index) => (
        <Button
          variant="ghost"
          size="sm"
          asChild
          className={cn(
            "group relative w-max",
            nav.path === pathname &&
              "bg-secondary/20 text-secondary hover:bg-secondary",
          )}
          key={index}
        >
          <Link
            href={nav.path}
            title={nav.name}
            aria-label={nav.name}
            className={cn(
              "group hover:bg-muted flex w-full items-center gap-x-2 rounded-lg px-2.5 py-2 transition-colors",
              pathname === "/" && "bg-muted",
            )}
          >
            <p
              className={cn(
                "text-muted-foreground line-clamp-1 text-sm font-medium transition group-hover:text-gray-600",
                pathname === "/" && "text-primary-dark-green",
              )}
            >
              {nav.name}
            </p>
          </Link>
        </Button>
      ))}
    </nav>
  );
};
