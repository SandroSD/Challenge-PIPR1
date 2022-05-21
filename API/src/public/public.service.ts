import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/utils';
import { badRequestResponse } from 'src/utils/response';
import { LoginDto } from './login.dto';

@Injectable()
export class PublicService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async login(loginDto: LoginDto) {
        try {
            const user = await this.userService.getByParam({ email: loginDto.email });

            if(!user) {
                throw badRequestResponse('user or email incorrect.');
            }
        
            const passwordCompare = await comparePassword(loginDto.password, user.password);

            if(!passwordCompare) {
                throw badRequestResponse('user or email incorrect.');
            }
        
            const token = this.jwtService.sign({user, sub: user._id});

            return {
                user,
                token
            }
        } catch (error) {
            console.log(error);
        }
    }
}
