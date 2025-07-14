"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export const SiteHeader = () => {
  const activePage = usePathname();

  const activeTitlePage = (activePage: string) => {
    switch (activePage) {
      case "/":
        return "Dashboard";
      case "/suratkeputusan":
        return "Surat Keputusan";
      case "/arsipvital":
        return "Arsip Vital";
      case "/suratkeluar":
        return "Surat Keluar";
      case "/perjanjiankerjasama":
        return "Perjanjian Kerja Sama";
      case "/arsipcovid":
        return "Arsip Covid";

      default:
        return null;
    }
  };

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="relative -ml-1 size-10 cursor-pointer" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium capitalize">
          {activeTitlePage(activePage)}
        </h1>
      </div>
    </header>
  );
};
