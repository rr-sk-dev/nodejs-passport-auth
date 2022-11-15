import { v4 } from 'uuid';
import { UserDto } from '../dtos/user.dto';

/**
 * User Entity
 */

export class User {
  readonly id: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;

  // We want to have our own id independently of the database we are using.
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    // If an id is received, that's a user update so we must keep it.
    this.id = id ? id : v4();
  }

  static toDto(user: User): UserDto {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }
}
