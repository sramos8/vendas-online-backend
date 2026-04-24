import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { returnUserDto } from '../user/dto/returnUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() loginDto: LoginDto): Promise<returnUserDto> {
         
        return new returnUserDto(await this.authService.login(loginDto));
        // Lógica de autenticação aqui
    }
}
