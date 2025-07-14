"use client";

import { TArchive } from "@/types/archive-type";
import { DataTable } from "../ui/data-table";
import { columns } from "./columns";

interface IArchiveData {
  data: TArchive[];
}

const Dashboard = ({ data }: IArchiveData) => {
  return (
    <>
      <DataTable
        filterKey="hal"
        filterName="hal surat"
        columns={columns}
        data={data}
        showFilter
        showPagination
      />
    </>
  );
};

export default Dashboard;
