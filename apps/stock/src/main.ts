import { NestFactory } from '@nestjs/core';
import { StockModule } from './stock.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    StockModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001
      }
    }
  );
  await app.listen();
}
bootstrap();
