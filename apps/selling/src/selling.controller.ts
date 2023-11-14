import { Controller, Get } from '@nestjs/common';
import { SellingService } from './selling.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SellingController {
  constructor(private readonly sellingService: SellingService) {}

  @MessagePattern("GET_SELLING")
  get(): string {
    return this.sellingService.get();
  }

  @MessagePattern("CREATE_SELLING")
  create() {
    return this.sellingService.create();
  }

  @MessagePattern("UPDATE_SELLING")
  update() {
    return this.sellingService.update()
  }
}
