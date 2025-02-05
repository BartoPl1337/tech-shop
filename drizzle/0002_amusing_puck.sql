ALTER TABLE "cpu" ALTER COLUMN "user_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "gpu" ALTER COLUMN "user_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "ram" ALTER COLUMN "user_id" DROP NOT NULL;