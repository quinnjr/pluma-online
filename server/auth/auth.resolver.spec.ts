import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { DatabaseService } from '../database/database.service';
import { AuthResolver } from './auth.resolver';
import { AuthModule } from './auth.module';
import { JwtService, JwtModule } from '@nestjs/jwt';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async ($configService: ConfigService) => ({
            secret: $configService.get<string>('JWT_SECRET'),
            signOptions: {
              expiresIn: '7200s'
            }
          })
        })
      ],
      providers: [AuthResolver, AuthService, DatabaseService]
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
