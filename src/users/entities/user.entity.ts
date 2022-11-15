import { v4 } from 'uuid';

/**
 * User Entity
 */

export class User {
  readonly id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;

  // We want to have our own id independently of the database we are using.
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    // If an id is received, that's a user update so we must keep it.
    this.id = id ? id : v4();
  }
}
