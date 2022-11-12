import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { User } from './user.model';

async function getUser(email: string): Promise<UserDto> {
  return await User.findOne({ email });
}

async function getUsers(): Promise<UserDto[]> {
  return await User.find();
}

async function createUser(user: CreateUserDto): Promise<UserDto> {
  return await User.create(user);
}

export { getUser, getUsers, createUser };
