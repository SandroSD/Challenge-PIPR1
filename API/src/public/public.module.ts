import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { PublicController } from './public.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    JwtModule.register({
      secret: process.env.TOKEN_SECRETO,
      signOptions: { expiresIn: process.env.EXPIRES_IN }
    })
  ],
  controllers: [PublicController],
  providers: [],
})
export class PublicModule {}
