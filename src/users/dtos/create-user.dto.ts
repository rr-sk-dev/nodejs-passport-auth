/**
 *  When creating a user, this should contain all the fields that
 * are required for it.
 */
export interface CreateUserDto {
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
}
