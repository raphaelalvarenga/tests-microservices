import { NestFactory } from '@nestjs/core';
import { SellingModule } from './selling.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SellingModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3002
      }
    }
  );
  await app.listen();
}
bootstrap();
