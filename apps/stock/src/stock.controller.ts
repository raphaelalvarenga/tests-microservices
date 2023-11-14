import { Controller, Get } from '@nestjs/common';
import { StockService } from './stock.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @MessagePattern("GET_STOCK")
  get(): string {
    return this.stockService.get();
  }

  @MessagePattern("CREATE_STOCK")
  create() {
    return this.stockService.create();
  }

  @MessagePattern("UPDATE_STOCK")
  update() {
    return this.stockService.update()
  }

}
