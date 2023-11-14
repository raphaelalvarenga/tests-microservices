import { Module } from '@nestjs/common';
import { SellingController } from './selling.controller';
import { SellingService } from './selling.service';

@Module({
  imports: [],
  controllers: [SellingController],
  providers: [SellingService],
})
export class SellingModule {}
