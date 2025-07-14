import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "dotenv";
import path from "path";
import fs from "fs";
import { parse } from "csv-parse";
import {
  arsipCovid,
  suratArsipVital,
  suratKeluar,
  suratKeputusan,
  suratPerjanjianKerjaSama,
} from "./schema";

config({ path: ".env.local" });

const sql = postgres(process.env.DATABASE_URL!, {
  max: 1,
});

const db = drizzle(sql);

const dateFormat = (tanggalString: string) => {
  const [day, month, year] = tanggalString.split("/");
  const tanggalISO = `${year}-${month}-${day}`; // Hasil: "2024-10-10"

  const tanggalObjek = new Date(tanggalISO);

  return tanggalObjek;
};

async function seed() {
  // Read the CSV file
  const csvFilePath = path.resolve(__dirname, "arsip_covid_.csv");
  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

  // Parse the CSV data
  parse(
    fileContent,
    {
      columns: true,
      skip_empty_lines: true,
      delimiter: ";",
    },
    async function (err, records) {
      if (err) {
        console.error(err);
        return;
      }

      console.log(records);

      // const record = records.map(
      //   (data: {
      //     id: string;
      //     nomor: string;
      //     tgl: string;
      //     jenis: string;
      //     tgl_berlaku: string;
      //     tgl_berakhir: string;
      //     hal: string;
      //     nama: string;
      //     ruang: string;
      //   }) => {
      //     if (data.tgl_berakhir === "0000-00-00") {
      //       return {
      //         ...data,
      //         tgl_berakhir: null,
      //       }; // Ubah ke null
      //     }

      //     return data;
      //   },
      // );

      // await db
      //   .insert(suratArsipVital)
      //   .values({
      //     nomor: record.nomor,
      //     tgl: dateFormat(record.tgl),
      //     jenis: record.jenis,
      //     tgl_berlaku: dateFormat(record.tgl_berlaku),
      //     tgl_berakhir: dateFormat(record.tgl_berakhir),
      //     hal: record.hal,
      //     nama: record.nama,
      //     ruang: record.ruang,
      //   })
      //   .execute();

      for (const record of records) {
        await db
          .insert(arsipCovid)
          .values({
            nomor: record.nomor,
            hal: record.hal,
            tgl: dateFormat(record.tgl),
            user: record.user,
            ruang: record.ruang,
          })
          .execute();
      }
      console.log("Seeding completed");
    },
  );
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
