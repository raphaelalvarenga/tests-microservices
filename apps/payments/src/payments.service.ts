import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'y/database';

@Injectable()
export class PaymentsService {
  private entity = "Payment"
  
  constructor(private databaseService: DatabaseService) {}
  
  get(): string {
    return this.databaseService.find(this.entity);
  }

  create() {
    return this.databaseService.create(this.entity)
  }

  update() {
    return this.databaseService.update(this.entity)
  }
}
