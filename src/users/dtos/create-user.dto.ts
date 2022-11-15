import { User } from '../entities/user.entity';

/**
 *  When creating a user, this should contain all the fields that
 * are required for it.
 */
export type CreateUserDto = Pick<User, 'email' | 'password' | 'firstName' | 'lastName'>;
