import OutgoingMails from "@/components/outgoing-mails";
import {
  countsActiveLetter,
  countSuratByStatus,
  getOutgoingMail,
} from "@/server/data/outgoing-mail";

const SuratKeluarPage = async () => {
  const outgoingMails = await getOutgoingMail();
  console.log(outgoingMails.map((mail) => mail.status));
  const countActiveLetters = await countsActiveLetter();

  const data = await countSuratByStatus();

  const totalAktif = data.find((d) => d.status === "Aktif")?.count ?? 0;
  const totalInaktif = data.find((d) => d.status === "Inaktif")?.count ?? 0;

  return (
    <>
      <div className="space-y-4 px-4 lg:px-6">
        <OutgoingMails outgoingMails={outgoingMails} />
      </div>
    </>
  );
};

export default SuratKeluarPage;
