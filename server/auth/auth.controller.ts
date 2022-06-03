import { Controller, Request, Post, Get, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from '../public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly $authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() request: any): Promise<any> {
    return this.$authService.login(request.user);
  }


  /**
   * Controller for User Registartion
   * @param email         User email
   * @param displayName   User display name
   * @param website       User website
   * @param institution   User institution
   * @param password      User password not hashed
   * @returns HttpResponse Promise, will include
   *          Success -> valid JWT token
   *          Fail, beacuse user exists -> response.body will include error {E_ERR, D_ERR, B_ERR} from UniqueError
   */
  @Public()
  @Post('register')
  public async register(
    @Body('email') email: string,
    @Body('displayName') displayName: string,
    @Body('website') website: string,
    @Body('institution') institution: string,
    @Body('password') password: string
  ): Promise<any> {
    return this.$authService.register(email, displayName, website, institution, password);
  }
}
