import { hash } from 'bcrypt';

export class CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;

  static async getPasswordHash(password: string) {
    return await hash(password, 5);
  }
}
