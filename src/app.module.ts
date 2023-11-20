import { Module } from '@nestjs/common';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 1997,
      username: 'postgres',
      password: '',
      database: 'postgres',
      entities: [path.join(__dirname, '/**/*.entity{.ts,.js}')],
      migrations: [
        path.join(__dirname, '/../database/migrations/**/*{.ts,.js}'),
      ],
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
