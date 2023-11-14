import { Module } from '@nestjs/common';
import { SellingController } from './selling.controller';
import { SellingService } from './selling.service';
import { DatabaseModule } from 'y/database';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'PAYMENTS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'payments_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ])
  ],
  controllers: [SellingController],
  providers: [SellingService],
})
export class SellingModule {}
