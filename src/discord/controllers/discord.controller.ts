import { Controller, Get, Inject } from "@nestjs/common";
import { ROUTES, SERVICES } from "src/utilities/constants";
import { AuthUser } from "src/utilities/decorators";
import { User } from "src/utilities/entities/User";
import { IDiscordService } from "../services/discord.service";

@Controller(ROUTES.DISCORD)
export class DiscordController {

    constructor(
        @Inject(SERVICES.DISCORD) private readonly discordService: IDiscordService
    ) {}
    @Get('guilds')
    async getMutualGuilds(@AuthUser() user: User) {
        return await this.discordService.getMutualGuilds(user.accessToken)
    }

}