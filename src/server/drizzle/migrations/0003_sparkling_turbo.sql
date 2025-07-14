ALTER TABLE "masa_aktif_rules" RENAME COLUMN "ruang" TO "urusan";--> statement-breakpoint
ALTER TABLE "masa_aktif_rules" RENAME COLUMN "masa_aktif_tahun" TO "masa_aktif";--> statement-breakpoint
DROP INDEX "masa_aktif_rules_rules_ruang_idx";--> statement-breakpoint
ALTER TABLE "masa_aktif_rules" ADD COLUMN "masa_inaktif" integer NOT NULL;--> statement-breakpoint
CREATE INDEX "masa_aktif_rules_rules_urusan_idx" ON "masa_aktif_rules" USING btree ("urusan");