import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Check, PlusCircle, X } from "lucide-react";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { TArchive } from "@/types/archive-type";
import { dateFormat } from "@/lib/utils";

export const columns: ColumnDef<TArchive>[] = [
  {
    accessorKey: "nomor",
    header: ({ column }) => {
      return (
        <div className="-mx-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-foreground/5 relative h-8"
          >
            Nomor Dokumen
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="max-w-10 truncate font-semibold">
          {row.getValue("nomor")}
        </span>
      );
    },
  },
  {
    accessorKey: "hal",
    header: ({ column }) => {
      return (
        <div className="-mx-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-foreground/5 relative h-8"
          >
            Hal
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="max-w-20 font-semibold break-all">
          {row.getValue("hal")}
        </span>
      );
    },
  },
  {
    accessorKey: "jenis",
    header: ({ column }) => {
      return (
        <div className="-mx-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-foreground/5 relative h-8"
          >
            Jenis Dokumen
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="max-w-10 truncate font-semibold">
          {row.getValue("jenis")}
        </span>
      );
    },
  },
  {
    accessorKey: "tgl",
    header: ({ column }) => {
      return (
        <div className="-ml-3">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-foreground/5 relative h-8"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tanggal Dokumen
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const date = dateFormat(row.getValue("tgl"), "dd MMMM yyyy");

      return <span className="max-w-5 truncate">{date}</span>;
    },
  },
  {
    accessorKey: "tgl_berlaku",
    header: ({ column }) => {
      return (
        <div className="-ml-3">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-foreground/5 relative h-8"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tanggal Berlaku
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const date = dateFormat(row.getValue("tgl_berlaku"), "dd MMMM yyyy");

      return <span className="max-w-5 truncate">{date}</span>;
    },
  },
  {
    accessorKey: "tgl_berakhir",
    header: ({ column }) => {
      return (
        <div className="-ml-3">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-foreground/5 relative h-8"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tanggal Berakhir
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const date = dateFormat(row.getValue("tgl_berakhir"), "dd MMMM yyyy");

      return <span className="max-w-5 truncate">{date}</span>;
    },
  },
  {
    accessorKey: "masa_aktif",
    header: ({ column }) => {
      return (
        <div className="-mx-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-foreground/5 relative h-8"
          >
            Masa Aktif
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="max-w-10 truncate">{row.getValue("masa_aktif")}</span>
      );
    },
  },
  {
    accessorKey: "ruang",
    header: ({ column }) => {
      return (
        <div className="-mx-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-foreground/5 relative h-8"
          >
            Keberadaan
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="max-w-10 truncate font-semibold">
          {row.getValue("ruang") || "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: ({ column }) => {
      return (
        <div className="-mx-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-foreground/5 relative h-8"
          >
            Status Arsip
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const isActive = row.getValue("isActive");

      return (
        <Badge
          variant={isActive ? "success" : "destructive"}
          className="px-2.5 py-1.5 text-xs font-medium"
        >
          {isActive ? (
            <span className="flex items-center gap-x-1.5">
              <Check className="h-4 w-4" />
              Aktif
            </span>
          ) : (
            <span className="flex items-center gap-x-1.5">
              <X className="h-4 w-4" />
              Tidak Aktif
            </span>
          )}
        </Badge>
      );
    },
  },
];
