import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SERVICES } from 'src/utilities/constants';
import { User } from 'src/utilities/entities/User';
import { UserService } from './services/user.service';

@Module({
    imports: [
        SequelizeModule.forFeature([User])
    ],
    providers: [
        {
            provide: SERVICES.USER,
            useClass: UserService
        }
    ],
    exports: [
        {
            provide: SERVICES.USER,
            useClass: UserService
        }
    ]
})
export class UserModule {}
