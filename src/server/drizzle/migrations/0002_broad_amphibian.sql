ALTER TABLE "masa_aktif_rules" ADD COLUMN "id" text PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "masa_aktif_rules" ADD COLUMN "jenis" text NOT NULL;--> statement-breakpoint
CREATE INDEX "masa_aktif_rules_jenis_idx" ON "masa_aktif_rules" USING btree ("jenis");