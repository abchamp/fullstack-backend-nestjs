import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './users.schema';
// https://dev.to/carlomigueldy/building-a-restful-api-with-nestjs-and-mongodb-mongoose-2165

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}

  create(createUserDto: CreateUserDto) {
    const createdUser = new this.usersModel(createUserDto);
    return createdUser.save();
  }

  findAll() {
    // const createdUser = new this.usersModel(this.usersModel.find().exec());
    // return createdUser
    return this.usersModel.find().exec();
  }

  findOne(username: string) {
    // const user = this.usersModel.find({"username": username}).exec()
    // const createdUser = new this.usersModel(this.usersModel.find({"username": username}).exec());
    return this.usersModel.findOne({"username": username}).exec()
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
