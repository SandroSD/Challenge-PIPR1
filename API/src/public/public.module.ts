import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { PublicController } from './public.controller';

@Module({
  imports: [
    UserModule,
    AuthModule,
    JwtModule.register({
      secret: "tokensecretoparaloginrandom",
      signOptions: { expiresIn: 180000 }
    })
  ],
  controllers: [PublicController],
  providers: [],
})
export class PublicModule {}
