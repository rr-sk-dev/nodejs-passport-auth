import { User } from '../entities/user.entity';
import { RepositoryUser, UserDocument } from './models/user.model';
import { IUsersRepository } from './users-repository.interface';

export class MongoDBUsersRepository implements IUsersRepository {
  constructor() {}

  async getAll(): Promise<User[]> {
    const data = await UserDocument.find();

    return data.map(this.mapToUser);
  }

  async findById(id: string): Promise<User> {
    const data = await UserDocument.findById(id);

    return this.mapToUser(data);
  }

  async findByEmail(email: string): Promise<User> {
    const data = await UserDocument.findOne({ email });

    return this.mapToUser(data);
  }

  async save(user: User): Promise<User> {
    const repoUser: RepositoryUser = {
      _id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      passwordHash: user.passwordHash,
    };

    const data = await UserDocument.create(repoUser);

    return this.mapToUser(data);
  }

  async delete(id: string): Promise<string> {
    await UserDocument.deleteOne({ _id: id });

    return 'User successfully deleted.';
  }

  private mapToUser(data: RepositoryUser): User {
    if (!data) {
      return null;
    }

    const user = new User(
      {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        passwordHash: data.passwordHash,
      },
      data._id
    );

    return user;
  }
}
