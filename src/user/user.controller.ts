import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { returnUserDto } from './dto/returnUser.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    @Post()
    async createUser(@Body() createUser: CreateUserDto) : Promise<UserEntity> {
        return this.userService.createUser(createUser);
    }


    @Get()
    async getAllUsers() : Promise<returnUserDto[]> {
        const users = await this.userService.getAllUsers();
        return users.map(user => new returnUserDto(user));
    }
}

