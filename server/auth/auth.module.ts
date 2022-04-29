import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { AuthResolver } from './auth.resolver';
import { EmailService } from '../email/email.service';
import { DatabaseService } from '../database/database.service';
import { CaslAbilityFactory } from 'server/casl/casl-ability.factory';
import { CaslModule } from 'server/casl/casl.module';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async ($configService: ConfigService) => ({
        secret: $configService.get<string>('APP_JWT_SECRET'),
        signOptions: {
          expiresIn: '7200s'
        }
      })
    }),
    CaslModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    DatabaseService,
    LocalStrategy,
    JwtStrategy,
    EmailService,
    AuthResolver
  ],
  exports: [AuthService]
})
export class AuthModule {}
