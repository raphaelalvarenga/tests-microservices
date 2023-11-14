import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class GatewayService {
  constructor(@Inject("SELLING") private sellingClient: ClientProxy) { }
  
  getHello(): string {
    return 'Hello World!';
  }

  purchase() {
    return this.sellingClient.send("CREATE_SELLING", {})
  }
}
