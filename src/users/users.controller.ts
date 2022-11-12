import { ParameterizedContext } from 'koa';
import { createRouter } from '../core/router';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.model';
import * as UsersService from './users.service';

const router = createRouter('users');

router.get('/', getUsers); // '/users'
router.post('/', createUser); // '/users'

async function getUsers(ctx: ParameterizedContext) {
  ctx.body = await User.find();
}

async function createUser(ctx: ParameterizedContext) {
  const { email, firstName, lastName, password } = ctx.request.body as CreateUserDto;
  console.log('[Request] Create User', { email, firstName, lastName, password });

  const existingEmail = await UsersService.getUser(email);

  if (existingEmail) {
    console.log('[ERROR] Email already exists', existingEmail);
    ctx.throw(400, { message: 'Email already exists' });
  }

  const passwordHash = await CreateUserDto.getPasswordHash(password);

  const user = await UsersService.createUser({ email, firstName, lastName, password: passwordHash });

  console.log('[INFO] User Created', user);

  ctx.body = user;
}

export { router as usersController };
