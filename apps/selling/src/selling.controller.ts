import { Controller, Get } from '@nestjs/common';
import { SellingService } from './selling.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SellingController {
  constructor(private readonly sellingService: SellingService) {}

  @MessagePattern("GET_STOCK")
  get(): string {
    return this.sellingService.get();
  }

  @MessagePattern("CREATE_STOCK")
  create() {
    return this.sellingService.create();
  }

  @MessagePattern("UPDATE_STOCK")
  update() {
    return this.sellingService.update()
  }
}
