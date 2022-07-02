import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from 'passport-discord'
import { SERVICES } from "src/utilities/constants";
import { IAuthService } from "../services/auth.service";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject(SERVICES.AUTH) private readonly authService: IAuthService) {
        super({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CLIENT_REDIRECT,
            scope: ['identify', 'email', 'guilds'],
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        console.log('DS validate method: ', profile.username)
        return this.authService.validateUser({id: profile.id, accessToken, refreshToken, username: profile.username, discriminator: profile.discriminator})
    }
}