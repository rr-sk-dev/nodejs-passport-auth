import { model, Schema } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';

const userSchema = new Schema<CreateUserDto>({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model('User', userSchema);
