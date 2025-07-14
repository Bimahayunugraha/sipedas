import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Check, PlusCircle, X } from "lucide-react";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { TOutgoingMails } from "@/types/archive-type";
import { dateFormat } from "@/lib/utils";

export const columns: ColumnDef<TOutgoingMails>[] = [
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
        <div className="w-48 font-semibold whitespace-normal">
          {row.getValue("hal")}
        </div>
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
    accessorKey: "tglAktifAkhir",
    header: ({ column }) => {
      return (
        <div className="-ml-3">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-foreground/5 relative h-8"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tanggal Aktif
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const isDateNull = row.getValue("tglAktifAkhir");
      const date = dateFormat(row.getValue("tglAktifAkhir"), "dd MMMM yyyy");

      return (
        <span className="max-w-5 truncate">
          {isDateNull === null ? "-" : date}
        </span>
      );
    },
  },
  {
    accessorKey: "tglInaktifAkhir",
    header: ({ column }) => {
      return (
        <div className="-ml-3">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-foreground/5 relative h-8"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tanggal Inaktif
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const isDateNull = row.getValue("tglInaktifAkhir");
      const date = dateFormat(row.getValue("tglInaktifAkhir"), "dd MMMM yyyy");

      return (
        <span className="max-w-5 truncate">
          {isDateNull === null ? "-" : date}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="-mx-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-foreground/5 relative h-8"
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <Badge
          variant={status === "Aktif" ? "success" : "destructive"}
          className="px-2.5 py-1.5 text-xs font-medium"
        >
          {status === "Aktif" ? (
            <span className="flex items-center gap-x-1.5">
              <Check className="h-4 w-4" />
              Aktif
            </span>
          ) : status === "Inaktif" ? (
            <span className="flex items-center gap-x-1.5">
              <X className="h-4 w-4" />
              Tidak Aktif
            </span>
          ) : status === "Tidak Ada Aturan" ? (
            <span className="flex items-center gap-x-1.5">
              <X className="h-4 w-4" />
              Tidak Ada Aturan
            </span>
          ) : null}
        </Badge>
      );
    },
  },
];
