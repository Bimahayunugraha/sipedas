export type TArchiveStatus = "active" | "inactive";

export type TActiveRules = {
  prefix: string;
  ruang: string;
  masa_aktif_tahun: number;
};

export type TArchive = {
  id: string;
  nomor: string;
  tgl: Date;
  jenis: string;
  tgl_berlaku: Date;
  tgl_berakhir: Date;
  hal: string;
  nama: string;
  ruang: string | null;
};

export type TOutgoingMails = {
  id: string;
  nomor: string;
  sifat: string;
  jenis: string;
  hal: string;
  tgl: Date;
  user: string | null;
  ruang: string | null;
  masaAktifTahun: number | null;
  masaInaktifTahun: number | null;
  tglAktifAkhir: unknown;
  tglInaktifAkhir: unknown;
  status: unknown;
};

export type TCountOutgoingMailsByStatus = {
  status: string;
  count: number;
};
