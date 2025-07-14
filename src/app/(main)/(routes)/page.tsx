import { getLabelActivePeriod, isActiveLetter } from "@/actions/active-period";
import { SectionCards } from "@/components/dashboard/section-cards";
import { dummyData } from "@/data/dummy";
import {
  countSuratByStatus,
  totalOutgoingMail,
} from "@/server/data/outgoing-mail";

export default async function Home() {
  const archiveWithStatus = dummyData.map((item) => {
    const aktif = isActiveLetter(item.tgl_berakhir);
    const masaAktifLabel = getLabelActivePeriod(
      item.tgl_berlaku,
      item.tgl_berakhir!,
    );

    return {
      ...item,
      isActive: aktif,
      masa_aktif: masaAktifLabel,
    };
  });

  const totalOutgoingMails = await totalOutgoingMail();
  const countOutgoingMailsByStatus = await countSuratByStatus();

  return (
    <>
      <div className="px-4 lg:px-6">
        <SectionCards
          countOutgoingMailsByStatus={countOutgoingMailsByStatus}
          totalOutgoingMails={totalOutgoingMails.count}
        />
      </div>
    </>
  );
}
