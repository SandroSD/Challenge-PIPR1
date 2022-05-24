import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { badRequestResponse } from 'src/utils/response';
import { LoginDto } from './login.dto';

@Controller('public')
export class PublicController {
  constructor(
    private readonly authService: AuthService
  ) {}

  // @UseGuards(AuthGuard('local'))
  @Post('/login')
  async create(
    @Body() body: LoginDto
  ){
    try {
      return this.authService.loginWithCredentials(body);
    } catch (error) {
      throw badRequestResponse(error.response);
    }
  }
}
