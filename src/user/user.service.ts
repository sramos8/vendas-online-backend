import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './entities/user.entity';
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

    async findUserById(userId: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: { id: userId }
        });
        if (!user) {
            throw new NotFoundException(`User with id ${userId} not found`);
        }

        return user;
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: { email } });
        if (!user) {
            throw new NotFoundException(`User with email ${email} not found`);
        }

        return user;
    }

    async getUserByIdUsingReferences(userId: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: { 
                id: userId 
            },
            relations: ['addresses', 'addresses.city', 'addresses.city.state']
        });
        if (!user) {
            throw new NotFoundException(`User with id ${userId} not found`);
        }
        return user;
    }
}