import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly $authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(
    @Request() req: any
  ): Promise<any> {
    return this.$authService.login(req.user);
  }
}
