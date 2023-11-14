import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern("GET_PAYMENT")
  get(): string {
    return this.paymentsService.get();
  }

  @MessagePattern("CREATE_PAYMENT")
  create() {
    console.log("CHEGOU AQUI");
    return this.paymentsService.create();
  }

  @MessagePattern("UPDATE_PAYMENT")
  update() {
    return this.paymentsService.update()
  }
}
