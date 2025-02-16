ALTER TABLE "cpu" ADD COLUMN "family" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "cpu" ADD COLUMN "socket" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "gpu" ADD COLUMN "family" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "gpu" ADD COLUMN "width" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "gpu" ADD COLUMN "height" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "ram" ADD COLUMN "family" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "ram" ADD COLUMN "type" varchar(255) NOT NULL;