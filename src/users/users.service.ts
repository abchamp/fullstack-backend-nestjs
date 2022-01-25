import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './users.schema';
import * as bcrypt from 'bcrypt';
// https://dev.to/carlomigueldy/building-a-restful-api-with-nestjs-and-mongodb-mongoose-2165

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const salt = await bcrypt.genSalt(); // random salt
    createUserDto['password'] = await bcrypt.hash(createUserDto['password'], salt);
    const createdUser = new this.usersModel(createUserDto);
    // password
    return createdUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  findOne(username: string): Promise<Users>{
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
