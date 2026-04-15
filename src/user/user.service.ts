import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async createUser( createUserDto: CreateUserDto) : Promise<UserEntity> {

        const salt0round = 10;
        const passwordHash = await bcrypt.hash(createUserDto.password, salt0round);
        
        return this.userRepository.save({
            ...createUserDto,
            typeUser: 1,
            password: passwordHash,
        });
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }
}
