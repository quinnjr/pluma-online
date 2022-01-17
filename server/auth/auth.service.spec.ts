import { JwtService, JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from '../database/database.service';
import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';
import { EmailService } from '../email/email.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async ($configService: ConfigService) => ({
            secret: $configService.get<string>('APP_JWT_SECRET'),
            signOptions: {
              expiresIn: '7200s'
            }
          })
        })
      ],
      providers: [AuthService, DatabaseService, EmailService, ConfigService]
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
