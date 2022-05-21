import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';
import { User, UserDocument } from './user.schema';
import { encryptPassword } from '../utils';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ) {}

    async create(userDto: UserDto) {
        try {
            userDto.password = await encryptPassword(userDto.password);

            const userModel = new this.userModel(userDto);

            return userModel.save();
        } catch (error) {
            console.log(error);
        }
    }

    async getByParam(param: Object): Promise<UserDocument> {
        try {
            const user: UserDocument = await this.userModel.findOne(param);

            return user;
        } catch (error) {
            console.log(error);
        }
    }
}
