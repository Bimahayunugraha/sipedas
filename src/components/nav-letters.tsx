"use client";

import { type LucideIcon } from "lucide-react";
import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const NavLetters = ({
  letters,
  pathname,
}: {
  letters: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
  pathname: string;
}) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm">Surat</SidebarGroupLabel>
      <SidebarMenu>
        {letters.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              tooltip={item.name}
              isActive={pathname === item.url}
            >
              <Link href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
