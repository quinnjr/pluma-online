import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from '../public.decorator';
import { UserCreateInput } from 'server/@generated/prisma-graphql/user';

@Controller('auth')
export class AuthController {
  constructor(private readonly $authService: AuthService) {}

  @Public()
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
    @Body('userInput') userInput: UserCreateInput,
    @Body('password') password: string
  ): Promise<any> {
    return this.$authService.register(userInput, password);
  }
}
