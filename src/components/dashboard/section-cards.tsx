import { CircleCheck, CircleX } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TCountOutgoingMailsByStatus } from "@/types/archive-type";

interface ISectionCards {
  countOutgoingMailsByStatus: TCountOutgoingMailsByStatus[];
  totalOutgoingMails: number;
}

export function SectionCards({
  countOutgoingMailsByStatus,
  totalOutgoingMails,
}: ISectionCards) {
  const totalActiveOutgoingMails =
    countOutgoingMailsByStatus.find((d) => d.status === "Aktif")?.count ?? 0;
  const totalInactiveOutgoingMails =
    countOutgoingMailsByStatus.find((d) => d.status === "Inaktif")?.count ?? 0;

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Ringkasan Surat</CardTitle>
        <CardDescription>
          Total surat & surat aktif dan tidak aktif
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
          {/* <Card className="@container/card">
            <CardHeader>
              <CardDescription>Surat Keputusan</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                476
              </CardTitle>
            </CardHeader>
            <CardFooter className="inline-flex items-center gap-1.5">
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleCheck fill="#35AC32" className="stroke-white" />
                270
              </Badge>
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleX fill="#B00020" className="stroke-white" />
                206
              </Badge>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Arsip Vital</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                476
              </CardTitle>
            </CardHeader>
            <CardFooter className="inline-flex items-center gap-1.5">
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleCheck fill="#35AC32" className="stroke-white" />
                270
              </Badge>
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleX fill="#B00020" className="stroke-white" />
                206
              </Badge>
            </CardFooter>
          </Card> */}
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Surat Keluar</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {totalOutgoingMails}
              </CardTitle>
            </CardHeader>
            <CardFooter className="inline-flex items-center gap-1.5">
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleCheck fill="#35AC32" className="stroke-white" />
                {totalActiveOutgoingMails}
              </Badge>
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleX fill="#B00020" className="stroke-white" />
                {totalInactiveOutgoingMails}
              </Badge>
            </CardFooter>
          </Card>
          {/* <Card className="@container/card">
            <CardHeader>
              <CardDescription>Perjanjian Kerja Sama</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                476
              </CardTitle>
            </CardHeader>
            <CardFooter className="inline-flex items-center gap-1.5">
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleCheck fill="#35AC32" className="stroke-white" />
                270
              </Badge>
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleX fill="#B00020" className="stroke-white" />
                206
              </Badge>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Arip Covid</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                476
              </CardTitle>
            </CardHeader>
            <CardFooter className="inline-flex items-center gap-1.5">
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleCheck fill="#35AC32" className="stroke-white" />
                270
              </Badge>
              <Badge variant="outline" className="text-sm [&>svg]:size-4">
                <CircleX fill="#B00020" className="stroke-white" />
                206
              </Badge>
            </CardFooter>
          </Card> */}
        </div>
      </CardContent>
      <CardFooter className="inline-flex items-center gap-1.5">
        <Badge
          variant="outline"
          className="border-transparent text-sm [&>svg]:size-4"
        >
          <CircleCheck fill="#35AC32" className="stroke-white" />
          Aktif
        </Badge>
        <Badge
          variant="outline"
          className="border-transparent text-sm [&>svg]:size-4"
        >
          <CircleX fill="#B00020" className="stroke-white" />
          Tidak Aktif
        </Badge>
      </CardFooter>
    </Card>
  );
}
