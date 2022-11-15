import { User } from '../entities/user.entity';

export interface IUsersRepository {
  // Get a list of all users.
  getAll(): Promise<User[]>;
  // Get a user by id.
  findById(id: string): Promise<User>;
  // Get a user by email.
  findByEmail(email: string): Promise<User>;
  // Save a user in the database.
  save(user: User): Promise<User>;
  // Delete a user from the database.
  delete(id: string): Promise<string>;
}
