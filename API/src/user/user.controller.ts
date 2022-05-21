import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() body: UserDto
  ){
    const newUser = await this.userService.create(body);

    return newUser;
  }
}
