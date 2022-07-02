import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SERVICES } from 'src/utilities/constants';
import { Guild } from 'src/utilities/entities/Guild';
import { GuildsController } from './controllers/guilds.controller';
import { GuildsService } from './services/guilds.service';

@Module({
    imports: [
        SequelizeModule.forFeature([Guild])
    ],
    controllers: [GuildsController],
    providers: [
        {
            provide: SERVICES.GUILDS,
            useClass: GuildsService
        }
    ]
})
export class GuildsModule {}
