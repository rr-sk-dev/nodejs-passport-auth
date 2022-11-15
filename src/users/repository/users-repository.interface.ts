import { User } from '../entities/user.entity';

export interface IUsersRepository {
  listAll(): Promise<User[]>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<User>;
  delete(id: string): Promise<string>;
}
