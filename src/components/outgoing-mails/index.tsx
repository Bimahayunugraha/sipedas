"use client";

import { TOutgoingMails } from "@/types/archive-type";
import { DataTable } from "../ui/data-table";
import { columns } from "./columns";

interface IArchiveData {
  outgoingMails: TOutgoingMails[];
}

const OutgoingMails = ({ outgoingMails }: IArchiveData) => {
  return (
    <>
      <DataTable
        filterKey="hal"
        filterName="surat keluar"
        columns={columns}
        data={outgoingMails}
        showFilter
        showPagination
      />
    </>
  );
};

export default OutgoingMails;
