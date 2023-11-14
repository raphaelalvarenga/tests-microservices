import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DatabaseService } from 'y/database';

@Injectable()
export class PaymentsService {
  private entity = "Payment"
  
  constructor(
    private databaseService: DatabaseService,
    @Inject("STOCK") private stockClient: ClientProxy
  ) { }
  
  get(): string {
    return this.databaseService.find(this.entity);
  }

  create() {
    this.databaseService.create(this.entity)
    this.stockClient.emit("CREATE_STOCK", {})
  }

  update() {
    return this.databaseService.update(this.entity)
  }
}
