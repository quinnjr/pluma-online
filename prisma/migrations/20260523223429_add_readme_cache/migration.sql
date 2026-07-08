-- CreateEnum
CREATE TYPE "ReadmeOwner" AS ENUM ('Plugin', 'Pipeline');

-- CreateTable
CREATE TABLE "ReadmeCache" (
    "ownerType" "ReadmeOwner" NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "html" TEXT,
    "etag" TEXT,
    "defaultBranch" TEXT,
    "lastStatus" INTEGER NOT NULL,
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReadmeCache_pkey" PRIMARY KEY ("ownerType","ownerId")
);

-- CreateIndex
CREATE INDEX "ReadmeCache_fetchedAt_idx" ON "ReadmeCache"("fetchedAt");
