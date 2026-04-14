import { Body, Controller, Get, Post } from '@nestjs/common';
import type { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post()
    async createUser(@Body() createUser: CreateUserDto) {
        return this.userService.createUser(createUser);
    }


    @Get()
    async getAllUsers() {
       return JSON.stringify({ name: 'John Doe'})
        
}
}
