"use server";

import { and, eq, sql } from "drizzle-orm";

import { db } from "../drizzle";
import { masaAktifRules, suratKeluar } from "../drizzle/schema";

export const getOutgoingMail = async () => {
  const suratKeluarFields = {
    id: suratKeluar.id,
    nomor: suratKeluar.nomor,
    sifat: suratKeluar.sifat,
    jenis: suratKeluar.jenis,
    hal: suratKeluar.hal,
    tgl: suratKeluar.tgl,
    user: suratKeluar.user,
    ruang: suratKeluar.ruang,
  };

  const outgoingMails = await db
    .selectDistinctOn([suratKeluar.id], {
      ...suratKeluarFields,

      masaAktifTahun: masaAktifRules.masaAktif,
      masaInaktifTahun: masaAktifRules.masaInaktif,
      cocok:
        sql`${suratKeluar.nomor} ILIKE ${masaAktifRules.prefix} || '/%'`.as(
          "cocok",
        ),
      prefixRule: masaAktifRules.prefix,
      nomorSurat: suratKeluar.nomor,
      jenisSurat: suratKeluar.jenis,
      tglAktifAkhir: sql`
        CASE
          WHEN ${masaAktifRules.masaAktif} IS NULL OR ${suratKeluar.tgl} IS NULL THEN null
          ELSE ${suratKeluar.tgl} + (${masaAktifRules.masaAktif} * interval '1 year')
        END
      `.as("tgl_aktif_akhir"),

      tglInaktifAkhir: sql`
      CASE
        WHEN ${masaAktifRules.masaAktif} IS NULL OR ${masaAktifRules.masaInaktif} IS NULL THEN NULL
        ELSE ${suratKeluar.tgl} + ((${masaAktifRules.masaAktif} + ${masaAktifRules.masaInaktif}) * interval '1 year')
      END
    `.as("tgl_inaktif_akhir"),

      status: sql`
      CASE
        WHEN ${masaAktifRules.masaAktif} IS NULL THEN 'Tidak Ada Aturan'
        WHEN CURRENT_DATE < (${suratKeluar.tgl} + (${masaAktifRules.masaAktif} * interval '1 year')) THEN 'Aktif'
        WHEN CURRENT_DATE < (${suratKeluar.tgl} + ((${masaAktifRules.masaAktif} + ${masaAktifRules.masaInaktif}) * interval '1 year')) THEN 'Inaktif'
        ELSE 'Inaktif'
      END
    `.as("status"),
    })
    .from(suratKeluar)
    .leftJoin(
      masaAktifRules,
      and(
        sql`LOWER(${suratKeluar.jenis}) = LOWER(${masaAktifRules.jenis})`,
        sql`${suratKeluar.nomor} LIKE ${masaAktifRules.prefix} || '%'`,
      ),
    )
    .orderBy(
      suratKeluar.id,
      sql`CHAR_LENGTH(${masaAktifRules.prefix}) DESC NULLS LAST`,
    );

  return outgoingMails;
};

export const totalOutgoingMail = async () => {
  const [result] = await db
    .select({ count: sql<number>`COUNT(*)` })
    .from(suratKeluar);

  return result;
};

export const countsActiveLetter = async () => {
  const result = await db
    .select({
      count: sql<number>`COUNT(*)`,
    })
    .from(suratKeluar)
    .innerJoin(
      masaAktifRules,
      and(
        eq(suratKeluar.jenis, masaAktifRules.jenis),
        sql`${suratKeluar.nomor} LIKE ${masaAktifRules.prefix} || '%'`,
      ),
    )
    .where(
      sql`
        (${suratKeluar.tgl} + (${masaAktifRules.masaAktif} * interval '1 year')) >= CURRENT_DATE
      `,
    );

  return result[0]?.count ?? 0;
};

export const countSuratByStatus = async () => {
  const result = await db
    .select({
      status: sql<string>`
        CASE
          WHEN ${masaAktifRules.masaAktif} IS NULL THEN 'Tidak Ada Aturan'
          WHEN CURRENT_DATE < (${suratKeluar.tgl} + (${masaAktifRules.masaAktif} * interval '1 year')) THEN 'Aktif'
          WHEN CURRENT_DATE < (${suratKeluar.tgl} + ((${masaAktifRules.masaAktif} + ${masaAktifRules.masaInaktif}) * interval '1 year')) THEN 'Inaktif'
          ELSE 'Inaktif'
        END
      `.as("status"),
      count: sql<number>`COUNT(*)`.as("count"),
    })
    .from(suratKeluar)
    .innerJoin(
      masaAktifRules,
      and(
        sql`LOWER(${suratKeluar.jenis}) = LOWER(${masaAktifRules.jenis})`,
        sql`${suratKeluar.nomor} LIKE ${masaAktifRules.prefix} || '%'`,
      ),
    )
    .groupBy(sql`status`);

  return result;
};
