import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    find(entity: string) {
        return `Here is all ${entity}`;
    }

    create(entity: string) {
        return `Created a ${entity}`
    }
}
