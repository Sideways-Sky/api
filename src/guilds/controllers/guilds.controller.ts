import { Controller, Get, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ROUTES, SERVICES } from "src/utilities/constants";
import { IGuildsService } from "../services/guilds.service";


@Controller(ROUTES.GUILDS)
export class GuildsController {

    constructor(
        @Inject(SERVICES.GUILDS) private readonly guildsService: IGuildsService
    ) {}

    @Get('config/:id')
    async getGuildConfig(@Param('id') id: string) {
        const guildConfig =  await this.guildsService.getGuildConfig(id)
        if(!guildConfig){ 
            throw new HttpException(
                'Guild Configuration was not found',
                HttpStatus.NOT_FOUND
            )
        }
        return guildConfig
    }
}