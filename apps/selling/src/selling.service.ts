import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DatabaseService } from 'y/database';

@Injectable()
export class SellingService {
  private entity = "Selling"
  
  constructor(
    private databaseService: DatabaseService,
    @Inject("PAYMENTS") private paymentsClient: ClientProxy
  ) { }
  
  get(): string {
    return this.databaseService.find(this.entity);
  }

  create() {
    this.databaseService.create(this.entity)
    this.paymentsClient.emit("CREATE_PAYMENT", {})
    return "Purchase in process.."
  }

  update() {
    return this.databaseService.update(this.entity)
  }
}
