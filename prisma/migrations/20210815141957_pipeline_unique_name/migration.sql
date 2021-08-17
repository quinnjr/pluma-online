/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `pipelines` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pipelines.name_unique" ON "pipelines"("name");
