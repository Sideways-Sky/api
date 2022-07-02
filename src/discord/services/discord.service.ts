import { Inject, Injectable } from "@nestjs/common";
import { SERVICES } from "src/utilities/constants";
import { delay } from "src/utilities/helper";
import { PartialGuild } from "src/utilities/types";
import { IDiscordHttpService } from "./discord-http.service";

export interface IDiscordService {
    getBotGuilds(): Promise<PartialGuild[]>
    getUserGuilds(accessToken: string): Promise<PartialGuild[]>
    getMutualGuilds(accessToken: string): Promise<PartialGuild[]>
}

@Injectable()
export class DiscordService implements IDiscordService {
    constructor(
        @Inject(SERVICES.DISCORD_HTTP) private readonly discordHttpService: IDiscordHttpService 
    ){}
    async getBotGuilds() {
        console.log('get BotGuilds')
        const {data: botGuilds} = await this.discordHttpService.fetchBotGuilds()
        return botGuilds
    }
    async getUserGuilds(accessToken: string) {
        console.log('get UserGuilds: ', accessToken)
        const {data: userGuilds} = await this.discordHttpService.fetchUserGuilds(accessToken)
        return userGuilds
    }
    async getMutualGuilds(accessToken: string) {
        const botGuilds = await this.getBotGuilds()
        await delay(1000) //ratelimit
        const userGuilds = await this.getUserGuilds(accessToken)
        console.log('got both for mutual')
        return userGuilds.filter((userGuild) =>  botGuilds.some((botGuild => botGuild.id === userGuild.id)))
    }
}