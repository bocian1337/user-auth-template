import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRespository: Repository<User>,
    ) { }

    async findOneByUsername(username: string) {
        return this.userRespository.findOneBy({ username });
    }
}
