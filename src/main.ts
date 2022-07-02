import 'reflect-metadata'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'
import { Sequelize } from 'sequelize-typescript';
const SequelizeStore = require("connect-session-sequelize")(session.Store);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const mystore = new SequelizeStore({
    db: new Sequelize({dialect: 'mysql'})
  })

  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000 * 60 * 24
      },
      store: mystore
    }),
  )
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true
  })
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(process.env.PORT);
  console.log(`Running on PORT ${process.env.PORT}`)
}
bootstrap();
