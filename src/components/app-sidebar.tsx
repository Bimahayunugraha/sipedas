"use client";

import {
  Archive,
  ArchiveX,
  Handshake,
  LayoutGrid,
  MailCheck,
  MailX,
} from "lucide-react";
import Image from "next/image";

import logoRSSM from "@/public/logo-rssm.png";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "./ui/sidebar";
import { NavMain } from "./nav-main";
import { NavLetters } from "./nav-letters";
import { usePathname } from "next/navigation";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutGrid,
    },
  ],
  letters: [
    // {
    //   name: "Surat Keputusan",
    //   url: "/suratkeputusan",
    //   icon: MailCheck,
    // },
    // {
    //   name: "Arsip Vital",
    //   url: "/arsipvital",
    //   icon: Archive,
    // },
    {
      name: "Surat Keluar",
      url: "/suratkeluar",
      icon: MailX,
    },
    // {
    //   name: "Perjanjian Kerja Sama",
    //   url: "/perjanjiankerjasama",
    //   icon: Handshake,
    // },
    // {
    //   name: "Arsip Covid",
    //   url: "/arsipcovid",
    //   icon: ArchiveX,
    // },
  ],
};

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-0.5"
            >
              <Link href="/">
                <Image
                  src={logoRSSM}
                  alt="Mount Vera Sejati Logo"
                  draggable={false}
                  className={"h-8 w-8"}
                  priority
                />
                <span className="text-base font-semibold">
                  Klasifikasi SIPEDAS.
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} pathname={pathname} />
        <NavLetters letters={data.letters} pathname={pathname} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
