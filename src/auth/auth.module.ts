import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { jwtConstants } from './constants';
import { AuthGuard } from './guards/auth.guard';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => PassportModule),
    forwardRef(() => JwtModule.register({
      // global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }, // TODO: Change expiration time - only for testing purposes
    })),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    // {
    //   provide: APP_GUARD, // TODO: Provide some global guards if needed
    //   useClass: AuthGuard,
    // },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}