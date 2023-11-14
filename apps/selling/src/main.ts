import { NestFactory } from '@nestjs/core';
import { SellingModule } from './selling.module';

async function bootstrap() {
  const app = await NestFactory.create(SellingModule);
  await app.listen(3000);
}
bootstrap();
