import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { Guild } from './utilities/entities/Guild';
import { User } from './utilities/entities/User';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { DiscordModule } from './discord/discord.module';
import { GuildsModule } from './guilds/guilds.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    PassportModule.register({ session: true }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.SQL_HOST,
      port: 3306,
      username: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE,
      synchronize: true,
      models: [Guild, User]
    }),
    AuthModule,
    UserModule,
    DiscordModule,
    GuildsModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
