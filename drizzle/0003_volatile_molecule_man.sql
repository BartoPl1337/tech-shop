ALTER TABLE "cpu" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "gpu" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "ram" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();