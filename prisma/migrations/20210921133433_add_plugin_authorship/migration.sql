-- AlterTable
ALTER TABLE "plugins" ADD COLUMN     "authorId" UUID,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "name" TEXT,
ADD COLUMN     "website" TEXT;

-- AddForeignKey
ALTER TABLE "plugins" ADD CONSTRAINT "plugins_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "pipelines.name_unique" RENAME TO "pipelines_name_key";

-- RenameIndex
ALTER INDEX "plugins.githubUrl_unique" RENAME TO "plugins_githubUrl_key";

-- RenameIndex
ALTER INDEX "plugins.name_unique" RENAME TO "plugins_name_key";

-- RenameIndex
ALTER INDEX "users.email_unique" RENAME TO "users_email_key";
