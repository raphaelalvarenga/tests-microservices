import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'y/database';

@Injectable()
export class StockService {
  private entity = "Stock"
  
  constructor(private databaseService: DatabaseService) {}
  
  get(): string {
    return this.databaseService.find(this.entity);
  }

  create() {
    console.log("Chegou aqui");
    return this.databaseService.create(this.entity)
  }

  update() {
    return this.databaseService.update(this.entity)
  }
}
