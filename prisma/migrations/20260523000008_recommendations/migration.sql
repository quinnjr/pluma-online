-- CreateTable
CREATE TABLE "PipelinePlugin" (
    "pipelineId" INTEGER NOT NULL,
    "pluginId" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "PipelinePlugin_pkey" PRIMARY KEY ("pipelineId","position")
);

-- CreateTable
CREATE TABLE "PluginEditEvent" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "pluginId" INTEGER NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PluginEditEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PluginEdge" (
    "fromPluginId" INTEGER NOT NULL,
    "toPluginId" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PluginEdge_pkey" PRIMARY KEY ("fromPluginId","toPluginId")
);

-- CreateIndex
CREATE INDEX "PipelinePlugin_pluginId_idx" ON "PipelinePlugin"("pluginId");

-- CreateIndex
CREATE INDEX "PluginEditEvent_sessionId_createdAt_idx" ON "PluginEditEvent"("sessionId", "createdAt");

-- CreateIndex
CREATE INDEX "PluginEditEvent_createdAt_idx" ON "PluginEditEvent"("createdAt");

-- CreateIndex
CREATE INDEX "PluginEdge_fromPluginId_weight_idx" ON "PluginEdge"("fromPluginId", "weight");

-- CreateIndex
CREATE INDEX "PluginEdge_toPluginId_weight_idx" ON "PluginEdge"("toPluginId", "weight");

-- AddForeignKey
ALTER TABLE "PipelinePlugin" ADD CONSTRAINT "PipelinePlugin_pipelineId_fkey" FOREIGN KEY ("pipelineId") REFERENCES "Pipeline"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PipelinePlugin" ADD CONSTRAINT "PipelinePlugin_pluginId_fkey" FOREIGN KEY ("pluginId") REFERENCES "Plugin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PluginEditEvent" ADD CONSTRAINT "PluginEditEvent_pluginId_fkey" FOREIGN KEY ("pluginId") REFERENCES "Plugin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PluginEdge" ADD CONSTRAINT "PluginEdge_fromPluginId_fkey" FOREIGN KEY ("fromPluginId") REFERENCES "Plugin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PluginEdge" ADD CONSTRAINT "PluginEdge_toPluginId_fkey" FOREIGN KEY ("toPluginId") REFERENCES "Plugin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
