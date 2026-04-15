import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser( createUserDto: CreateUserDto) : Promise<User> {

        const salt0round = 10;
        const passwordHash = await bcrypt.hash(createUserDto.password, salt0round);
        
        const user: User = {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordHash,
        }

        this.users.push(user);

        return user;
    }

    async getAllUsers(): Promise<User[]> {
        return this.users;
    }
}
