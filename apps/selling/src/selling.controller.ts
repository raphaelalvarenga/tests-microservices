import { Controller, Get } from '@nestjs/common';
import { SellingService } from './selling.service';

@Controller()
export class SellingController {
  constructor(private readonly sellingService: SellingService) {}

  @Get()
  getHello(): string {
    return this.sellingService.getHello();
  }
}
