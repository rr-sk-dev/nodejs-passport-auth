import { model, Schema } from 'mongoose';

interface User {
  createdAt: Date;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const userSchema = new Schema<User>({
  createdAt: { default: Date.now(), type: Date },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model('User', userSchema);
