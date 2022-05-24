import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';
import { User, UserDocument } from './user.schema';
import { encryptPassword } from '../utils/password';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ) {}

    async create(userDto: UserDto) {
        userDto.password = await encryptPassword(userDto.password);

        const userModel = new this.userModel(userDto);

        return userModel.save();
    }

    async getByParam(param: Object): Promise<UserDocument> {
        return await this.userModel.findOne(param);
    }
}
