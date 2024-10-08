import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  const port = process.env.PORT || 3000;

  app.enableCors();

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
