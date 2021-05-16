import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'info']
  });

  app.useGlobalPipes(new ValidationPipe(
    whitelist: true,
    transform: true
  ));

  await app.listen(3000);
}

bootstrap()
  .catch(console.error);
