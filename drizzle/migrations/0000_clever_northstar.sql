CREATE TABLE "cpu" (
	"user_id" uuid NOT NULL,
	"name" varchar(255) NOT NULL,
	"memory" integer NOT NULL,
	"price" integer NOT NULL,
	"id" uuid PRIMARY KEY NOT NULL,
	"description" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "gpu" (
	"user_id" uuid NOT NULL,
	"name" varchar(255) NOT NULL,
	"memory" integer NOT NULL,
	"price" integer NOT NULL,
	"id" uuid PRIMARY KEY NOT NULL,
	"description" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ram" (
	"user_id" uuid NOT NULL,
	"name" varchar(255) NOT NULL,
	"memory" integer NOT NULL,
	"price" integer NOT NULL,
	"id" uuid PRIMARY KEY NOT NULL,
	"description" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "cpu" ADD CONSTRAINT "cpu_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gpu" ADD CONSTRAINT "gpu_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ram" ADD CONSTRAINT "ram_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;