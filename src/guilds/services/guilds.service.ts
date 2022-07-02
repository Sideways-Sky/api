import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Guild } from "src/utilities/entities/Guild";

export interface IGuildsService {
    getGuildConfig(id: string): Promise<Guild>
}

@Injectable()
export class GuildsService implements IGuildsService {

    constructor(@InjectModel(Guild) private readonly guildRepository: typeof Guild) {}

    getGuildConfig(id: string) {
        return this.guildRepository.findByPk(id)
    }
}