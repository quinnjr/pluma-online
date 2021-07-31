import { Module } from '@nestjs/common';
import { PluginsResolver } from './plugins.resolver';

@Module({
  providers: [PluginsResolver]
})
export class PluginsModule {}
