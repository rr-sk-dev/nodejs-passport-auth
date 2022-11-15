import { hash } from 'bcrypt';
import { red } from 'chalk';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { IUsersRepository } from '../repository/users-repository.interface';

export class UsersService {
  constructor(private usersRepository: IUsersRepository) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.getAll();
  }

  async getUser(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (user === null) {
      throw new Error('User not found.');
    }

    return user;
  }

  async createUser(data: CreateUserDto): Promise<User> {
    // 1. Check if the user already exists.
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      const errorMessage = 'User already exists.';
      console.log(red('[ERROR] ') + errorMessage);

      throw new Error(errorMessage);
    }

    // 2. Create a new user.
    const user = new User({
      email: data.email,
      passwordHash: await hash(data.password, 5),
      firstName: data.firstName,
      lastName: data.lastName,
    });

    return await this.usersRepository.save(user);
  }

  async updateUser(id: string, user: User): Promise<User> {
    // TODO: Validate request body, it should contain the id and all the other user properties
    // 1. Check if the user exists.
    const existingUser = await this.usersRepository.findById(id);

    if (!existingUser) {
      const errorMessage = 'User not found.';
      console.log(red('[ERROR] ') + errorMessage);

      throw new Error(errorMessage);
    }

    // TODO: map the received user to not override properties like "id", "password", etc...

    return await this.usersRepository.save(user);
  }

  async deleteUser(id: string): Promise<string> {
    // 1. Check if the user exists.
    const existingUser = await this.usersRepository.findById(id);

    if (!existingUser) {
      const errorMessage = 'User not found.';
      console.log(red('[ERROR] ') + errorMessage);

      throw new Error(errorMessage);
    }

    return this.usersRepository.delete(id);
  }
}
