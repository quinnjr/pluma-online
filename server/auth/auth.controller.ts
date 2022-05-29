import { Controller, Request, Post, Get, UseGuards, Body, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { NotUniqueException } from "./not-unique.exception";
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from '../public.decorator';
import { catchError } from "rxjs";

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
   *          Success -> response.body will have user input data
   *          Success, but user exists -> response.body will inncluse error {0,1,2}
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
    return this.$authService.register(email, displayName, website, institution, password)
    .catch(err => {return err.response});
  }
}
