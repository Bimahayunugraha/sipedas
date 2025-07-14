import { pgTable, text, integer, timestamp, index } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const masaAktifRules = pgTable(
  "masa_aktif_rules",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    prefix: text("prefix").notNull(),
    urusan: text("urusan").notNull(),
    jenis: text("jenis").notNull(),
    masaAktif: integer("masa_aktif").notNull(),
    masaInaktif: integer("masa_inaktif").notNull(),
  },
  (masaAktifRules) => {
    return {
      prefixIdx: index("masa_aktif_rules_prefix_idx").on(masaAktifRules.prefix),
      urusanIdx: index("masa_aktif_rules_rules_urusan_idx").on(
        masaAktifRules.urusan,
      ),
      jenisIdx: index("masa_aktif_rules_jenis_idx").on(masaAktifRules.jenis),
    };
  },
);

export const suratKeputusan = pgTable(
  "surat_keputusan",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    nomor: text("nomor").notNull(),
    perihal: text("perihal").notNull(),
    tgl_surat: timestamp("tgl_surat").notNull(),
    user: text("user"),
    ruang: text("ruang"),
  },
  (suratKeputusan) => ({
    nomorIdx: index("surat_keputusan_nomor_idx").on(suratKeputusan.nomor),
    ruangIdx: index("surat_keputusan_ruang_idx").on(suratKeputusan.ruang),
  }),
);

export const suratArsipVital = pgTable(
  "surat_arsip_vital",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    nomor: text("nomor").notNull(),
    tgl: timestamp("tgl").notNull(),
    jenis: text("jenis").notNull(),
    tgl_berlaku: timestamp("tgl_berlaku").notNull(),
    tgl_berakhir: timestamp("tgl_berakhir"),
    hal: text("hal").notNull(),
    nama: text("nama"),
    ruang: text("ruang"),
  },
  (suratArsipVital) => ({
    nomorIdx: index("surat_arsip_vital_nomor_idx").on(suratArsipVital.nomor),
    ruangIdx: index("surat_arsip_vital_ruang_idx").on(suratArsipVital.ruang),
  }),
);

export const suratKeluar = pgTable(
  "surat_keluar",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    nomor: text("nomor").notNull(),
    sifat: text("sifat").notNull(),
    jenis: text("jenis").notNull(),
    hal: text("hal").notNull(),
    tgl: timestamp("tgl").notNull(),
    user: text("user"),
    ruang: text("ruang"),
  },
  (suratKeluar) => ({
    nomorIdx: index("surat_keluar_nomor_idx").on(suratKeluar.nomor),
    ruangIdx: index("surat_keluar_ruang_idx").on(suratKeluar.ruang),
  }),
);

export const suratPerjanjianKerjaSama = pgTable(
  "surat_perjanjian_kerja_sama",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    nomor: text("nomor").notNull(),
    jenis: text("jenis").notNull(),
    hal: text("hal").notNull(),
    tgl_1: timestamp("tgl_1").notNull(),
    tgl_2: timestamp("tgl_2").notNull(),
    user: text("user"),
    ruang: text("ruang"),
  },
  (suratPerjanjianKerjaSama) => ({
    nomorIdx: index("surat_perjanjian_kerja_sama_nomor_idx").on(
      suratPerjanjianKerjaSama.nomor,
    ),
    ruangIdx: index("surat_perjanjian_kerja_sama_ruang_idx").on(
      suratPerjanjianKerjaSama.ruang,
    ),
  }),
);

export const arsipCovid = pgTable(
  "arsip_covid",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    nomor: text("nomor").notNull(),
    hal: text("hal").notNull(),
    tgl: timestamp("tgl").notNull(),
    user: text("user"),
    ruang: text("ruang"),
  },
  (arsipCovid) => ({
    nomorIdx: index("arsip_covid_nomor_idx").on(arsipCovid.nomor),
    ruangIdx: index("arsip_covid_ruang_idx").on(arsipCovid.ruang),
  }),
);
