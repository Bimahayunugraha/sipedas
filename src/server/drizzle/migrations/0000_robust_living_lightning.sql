CREATE TABLE "arsip_covid" (
	"id" text PRIMARY KEY NOT NULL,
	"nomor" text NOT NULL,
	"hal" text NOT NULL,
	"tgl" timestamp NOT NULL,
	"user" text,
	"ruang" text
);
--> statement-breakpoint
CREATE TABLE "masa_aktif_rules" (
	"prefix" text NOT NULL,
	"ruang" text NOT NULL,
	"masa_aktif_tahun" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "surat_arsip_vital" (
	"id" text PRIMARY KEY NOT NULL,
	"nomor" text NOT NULL,
	"tgl" timestamp NOT NULL,
	"jenis" text NOT NULL,
	"tgl_berlaku" timestamp NOT NULL,
	"tgl_berakhir" timestamp NOT NULL,
	"hal" text NOT NULL,
	"nama" text,
	"ruang" text
);
--> statement-breakpoint
CREATE TABLE "surat_keluar" (
	"id" text PRIMARY KEY NOT NULL,
	"nomor" text NOT NULL,
	"sifat" text NOT NULL,
	"jenis" text NOT NULL,
	"hal" text NOT NULL,
	"tgl" timestamp NOT NULL,
	"user" text,
	"ruang" text
);
--> statement-breakpoint
CREATE TABLE "surat_keputusan" (
	"id" text PRIMARY KEY NOT NULL,
	"nomor" text NOT NULL,
	"perihal" text NOT NULL,
	"tgl_surat" timestamp NOT NULL,
	"user" text,
	"ruang" text
);
--> statement-breakpoint
CREATE TABLE "surat_perjanjian_kerja_sama" (
	"id" text PRIMARY KEY NOT NULL,
	"nomor" text NOT NULL,
	"jenis" text NOT NULL,
	"hal" text NOT NULL,
	"tgl_1" timestamp NOT NULL,
	"tgl_2" timestamp NOT NULL,
	"user" text,
	"ruang" text
);
--> statement-breakpoint
CREATE INDEX "arsip_covid_nomor_idx" ON "arsip_covid" USING btree ("nomor");--> statement-breakpoint
CREATE INDEX "arsip_covid_ruang_idx" ON "arsip_covid" USING btree ("ruang");--> statement-breakpoint
CREATE INDEX "masa_aktif_rules_prefix_idx" ON "masa_aktif_rules" USING btree ("prefix");--> statement-breakpoint
CREATE INDEX "masa_aktif_rules_rules_ruang_idx" ON "masa_aktif_rules" USING btree ("ruang");--> statement-breakpoint
CREATE INDEX "surat_arsip_vital_nomor_idx" ON "surat_arsip_vital" USING btree ("nomor");--> statement-breakpoint
CREATE INDEX "surat_arsip_vital_ruang_idx" ON "surat_arsip_vital" USING btree ("ruang");--> statement-breakpoint
CREATE INDEX "surat_keluar_nomor_idx" ON "surat_keluar" USING btree ("nomor");--> statement-breakpoint
CREATE INDEX "surat_keluar_ruang_idx" ON "surat_keluar" USING btree ("ruang");--> statement-breakpoint
CREATE INDEX "surat_keputusan_nomor_idx" ON "surat_keputusan" USING btree ("nomor");--> statement-breakpoint
CREATE INDEX "surat_keputusan_ruang_idx" ON "surat_keputusan" USING btree ("ruang");--> statement-breakpoint
CREATE INDEX "surat_perjanjian_kerja_sama_nomor_idx" ON "surat_perjanjian_kerja_sama" USING btree ("nomor");--> statement-breakpoint
CREATE INDEX "surat_perjanjian_kerja_sama_ruang_idx" ON "surat_perjanjian_kerja_sama" USING btree ("ruang");