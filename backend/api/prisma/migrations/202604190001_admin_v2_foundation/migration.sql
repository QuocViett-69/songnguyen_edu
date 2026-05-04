-- Alter existing enum for future compatibility
DO $$
BEGIN
  ALTER TYPE "Role" ADD VALUE IF NOT EXISTS 'SUPERADMIN';
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- Create enum for admin RBAC foundation
CREATE TYPE "AdminRole" AS ENUM ('ADMIN', 'SUPERADMIN');

-- Create enum for system settings
CREATE TYPE "SettingCategory" AS ENUM ('SEO', 'PRICING', 'LANDING_PAGE', 'BANKING', 'SYSTEM');

-- Extend admins with role
ALTER TABLE "admins"
ADD COLUMN "role" "AdminRole" NOT NULL DEFAULT 'ADMIN';

-- Extend tutors with phone for search filter
ALTER TABLE "tutors"
ADD COLUMN "phone" TEXT;

CREATE INDEX "tutors_phone_idx" ON "tutors"("phone");

-- Create class members table for group-learning V2
CREATE TABLE "class_members" (
    "id" TEXT NOT NULL,
    "request_id" TEXT,
    "class_id" TEXT,
    "student_name" TEXT NOT NULL,
    "student_grade" TEXT,
    "parent_name" TEXT NOT NULL,
    "parent_phone" TEXT NOT NULL,
    "parent_email" TEXT,
    "address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "class_members_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "class_members_request_id_idx" ON "class_members"("request_id");
CREATE INDEX "class_members_class_id_idx" ON "class_members"("class_id");

ALTER TABLE "class_members" ADD CONSTRAINT "class_members_request_id_fkey"
FOREIGN KEY ("request_id") REFERENCES "class_requests"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "class_members" ADD CONSTRAINT "class_members_class_id_fkey"
FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Extend payments for multi-attempt per class
ALTER TABLE "payments"
ADD COLUMN "class_id" TEXT,
ADD COLUMN "attempt_count" INTEGER NOT NULL DEFAULT 1;

ALTER TABLE "payments" ADD CONSTRAINT "payments_class_id_fkey"
FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

CREATE INDEX "payments_class_id_created_at_idx" ON "payments"("class_id", "created_at" DESC);
CREATE INDEX "payments_class_id_status_idx" ON "payments"("class_id", "status");

-- Enforce at most one pending payment per class at database level
CREATE UNIQUE INDEX "payments_one_pending_per_class_idx"
ON "payments"("class_id")
WHERE "class_id" IS NOT NULL AND "status" = 'PENDING';

-- Create dynamic system settings table (JSONB)
CREATE TABLE "system_settings" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "category" "SettingCategory" NOT NULL DEFAULT 'SYSTEM',
    "value" JSONB NOT NULL,
    "description" TEXT,
    "updated_by_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "system_settings_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "system_settings_key_key" ON "system_settings"("key");
CREATE INDEX "system_settings_category_idx" ON "system_settings"("category");
CREATE INDEX "system_settings_updated_by_id_idx" ON "system_settings"("updated_by_id");

ALTER TABLE "system_settings" ADD CONSTRAINT "system_settings_updated_by_id_fkey"
FOREIGN KEY ("updated_by_id") REFERENCES "admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
