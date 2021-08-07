-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FileConverters', 'StatsVisualizations', 'Transformations', 'Dissimilarity', 'Correlation', 'Centrality', 'Clustering', 'TimeSeries', 'ExternalTools', 'Miscellaneous');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('CXX', 'Python', 'Perl', 'CUDA');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'User');

-- CreateTable
CREATE TABLE "plugins" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "description" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "language" "Language" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'User',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "plugins.name_unique" ON "plugins"("name");

-- CreateIndex
CREATE UNIQUE INDEX "plugins.githubUrl_unique" ON "plugins"("githubUrl");

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");
