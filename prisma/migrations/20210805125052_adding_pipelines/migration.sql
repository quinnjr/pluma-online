-- CreateEnum
CREATE TYPE "PipelineStatus" AS ENUM ('Completed', 'InProgress');

-- CreateTable
CREATE TABLE "pipelines" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "status" "PipelineStatus" NOT NULL DEFAULT E'Completed',

    PRIMARY KEY ("id")
);
