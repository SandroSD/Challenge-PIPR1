import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { PublicService } from './public.service';

@Controller('public')
export class PublicController {
  constructor(
    private readonly publicService: PublicService
  ) {}

  @Post('/login')
  async create(
    @Body() body: LoginDto
  ){
    try {
      return await this.publicService.login(body);
    } catch (error) {
      console.log(error); 
    }
  }
}
