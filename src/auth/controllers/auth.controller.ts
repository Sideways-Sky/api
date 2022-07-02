import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { ROUTES } from 'src/utilities/constants';
import { AuthUser } from 'src/utilities/decorators';
import { User } from 'src/utilities/entities/User';
import { AuthentitcatedGuard, DiscordAuthGuard } from '../utils/Guards';

@Controller(ROUTES.AUTH)
export class AuthController {
    @Get('login')
    @UseGuards(DiscordAuthGuard)
    login() {}

    @Get('redirect')
    @UseGuards(DiscordAuthGuard)
    redirect(@Res() res: Response) {
        res.redirect('http://localhost:3000/servers')
    }

    @Get('status')
    @UseGuards(AuthentitcatedGuard)
    status(@AuthUser() user: User) {
        return user
    }

    @Post('logout')
    logout() {}
}
