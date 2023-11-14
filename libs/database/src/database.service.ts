import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    find(entity: string) {
        return `${entity} listed`;
    }

    create(entity: string) {
        return `${entity} created`
    }

    update(entity: string) {
        return `${entity} updated`;
    }
}
