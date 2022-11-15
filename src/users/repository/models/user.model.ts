import { model, Schema } from 'mongoose';
import { CreateUserDto } from '../../dtos/create-user.dto';

export type RepositoryUser = Omit<CreateUserDto, 'password'> & { _id?: string; passwordHash: string };

const userSchema = new Schema<RepositoryUser>({
  // MongoDb has an "_id" property
  _id: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export const UserDocument = model('User', userSchema);
