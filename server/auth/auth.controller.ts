import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

import { LocalAuthGuard } from './local-auth.guard';
import { Public } from '../public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly $authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() req: any): Promise<any> {
    return this.$authService.login(req.user);
  }

  @Public()
  @Post('register')
  public async register(
    @Body('email') email: string,
    @Body('password') password: string
  ): Promise<any> {
    return this.$authService.register(email, password);
  }
}
