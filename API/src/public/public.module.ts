import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { PublicController } from './public.controller';
import { PublicService } from './public.service';

@Module({
  imports: [UserModule, JwtModule.register({
    secret: "tokensecretoparaloginrandom",
    signOptions: { expiresIn: 180000 }
  })],
  controllers: [PublicController],
  providers: [PublicService],
})
export class PublicModule {}
