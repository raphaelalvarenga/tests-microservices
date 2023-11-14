import { Injectable } from '@nestjs/common';

@Injectable()
export class SellingService {
  getHello(): string {
    return 'Hello World!';
  }
}
