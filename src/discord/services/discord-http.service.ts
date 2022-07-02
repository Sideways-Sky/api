import { Injectable } from "@nestjs/common"
import axios, { AxiosResponse } from 'axios'
import { PartialGuild } from "src/utilities/types"

export interface IDiscordHttpService {
    fetchBotGuilds(): Promise<AxiosResponse<PartialGuild[]>>
    fetchUserGuilds(accessToken: string): Promise<AxiosResponse<PartialGuild[]>>
}

@Injectable()
export class DiscordHttpService implements IDiscordHttpService {
    fetchBotGuilds() {
        return axios.get<PartialGuild[]>('https://discord.com/api/v9/users/@me/guilds', {
            headers: {
                Authorization: `Bot ${process.env.CLIENT_BOT_TOKEN}`
            }
        })
    }
    fetchUserGuilds(accessToken: string) {
        return axios.get<PartialGuild[]>('https://discord.com/api/v9/users/@me/guilds', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
    
}