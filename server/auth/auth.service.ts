import { createHash } from 'node:crypto';
import {
  Injectable,
  UnauthorizedException,
  NotAcceptableException
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import argon2 from 'argon2';

import { DatabaseService } from '../database/database.service';
import { User, UserCreateInput } from '../@generated/prisma-graphql/user';
import { AuthResponse } from './auth-response';
import { EmailService } from '../email/email.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly $databaseService: DatabaseService,
    private readonly $jwtService: JwtService,
    private readonly $emailService: EmailService,
    private readonly $configService: ConfigService
  ) {}

  public async validateUser(email: string, password: string): Promise<any> {
    const user = await this.$databaseService.user.findUnique({
      where: {
        email
      }
    });

    if (user) {
      const { passwordHash, ...result } = user;
      return result;
    }

    return null;
  }

  public async login(user: User): Promise<{ accessToken: string }> {
    const payload = {
      username: user.email,
      sub: user.id
    };

    return {
      accessToken: this.$jwtService.sign(payload)
    };
  }

  public async loginGraphQL(
    email: string,
    password: string
  ): Promise<AuthResponse> {
    const user = await this.$databaseService.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      throw new UnauthorizedException(
        'User could not be found in the database'
      );
    }

    const { passwordHash, ...request } = user;

    const isValidPassword = await argon2.verify(passwordHash, password);

    if (isValidPassword) {
      const payload = {
        email: request.email,
        sub: request.id
      };

      return {
        accessToken: this.$jwtService.sign(payload)
      };
    } else {
      throw new UnauthorizedException("User's password did not match");
    }
  }

  public async register(
    input: UserCreateInput,
    password: string
  ): Promise<any> {
    let check = await this.$databaseService.user.findMany({
      where: {
        OR: [
          {
            email: input.email
          },
          {
            displayName: input.displayName
          }
        ]
      }
    });

    //Email and Display name are in use
    if (check?.length > 1) {
      throw new NotAcceptableException(
        'The email and display name you are trying to use are already registered'
      );
    }

    //Email is in use
    if (check[0]?.email === input.email) {
      throw new NotAcceptableException(
        'This email address is already registered'
      );
    }

    //Display name is in use
    if (check[0]?.displayName === input.displayName) {
      throw new NotAcceptableException('This display name is already in use');
    }

    const passwordHash = await argon2.hash(password);

    const newUser = {
      ...input,
      passwordHash
    };

    let user = await this.$databaseService.user.create({
      data: newUser
    });

    const sha1 = createHash('sha1');

    const registrationCode = sha1
      .update(
        JSON.stringify({
          id: user.id,
          email: user.email
        })
      )
      .digest('hex');

    await this.$databaseService.registration.create({
      data: {
        user: {
          connect: {
            id: user.id
          }
        },
        code: registrationCode
      }
    });

    await this.$emailService.send({
      to: `${user.displayName} <${user.email}`,
      from: `noreply <noreply@${this.$configService.get('APP_HOST')}>`,
      subject: '[PluMA Online] Registration',
      text: `Hello ${
        user.displayName
      },\nThis email contains your registration code for PluMA Online.\nCode: ${registrationCode}\nPlease input your code at\nhttps://${this.$configService.get(
        'APP_HOST'
      )}/registation/verify?userId=${user.id}\nto verify your account.`,
      attachment: [
        {
          alternative: true,
          data: `
            <html lang="en">
              <body>
              <p>Hello ${user.displayName},</p>
              <p>This email contains your registration code for PluMA Online.</p>
              <p>
                <code>Code: ${registrationCode}</code>
              </p>
              <p>Please click <a href="${this.$configService.get(
                'APP_HOST'
              )}/registration/verify?userId=${
            user.id
          }&code=${registrationCode}">here</a> to verify your account.</p>
              </body>
            </html>
          `
        }
      ]
    });

    const payload = {
      email: user.email,
      sub: user.id
    };
    return {
      accessToken: this.$jwtService.sign(payload)
    };
  }

  public async verify(userId: string, code: string): Promise<boolean> {
    let user = await this.$databaseService.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) {
      throw new UnauthorizedException('User could not be found');
    }

    const registration = await this.$databaseService.registration.findUnique({
      where: {
        id: userId
      }
    });

    if (!registration) {
      throw new UnauthorizedException(
        'Registration information could not be found'
      );
    }

    if (registration.code === code) {
      user.enabled = true;
      await this.$databaseService.user.update({
        where: {
          id: user.id
        },
        data: user
      });

      return true;
    } else {
      return false;
    }
  }
}
