import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { comparePassword } from "src/utils/password";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.getByParam({ email });

        if(user && comparePassword(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async loginWithCredentials(user) {
        const payload = {username: user.email, sub: user._id};

        return {
            token: this.jwtService.sign(payload)
        }
    }
}