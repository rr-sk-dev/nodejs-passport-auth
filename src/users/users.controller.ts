import { ParameterizedContext } from 'koa';
import { createRouter } from '../core/router';
import { UserDto } from './user.dto';

const router = createRouter('users');

router.get('/', getUsers);
router.post('/', createUser);

async function getUsers(ctx: ParameterizedContext) {
  ctx.body = 'get users';
}

async function createUser(ctx: ParameterizedContext) {
  const payload = ctx.request.body as UserDto;

  console.log(payload);

  ctx.body = payload;
}

export { router as usersRouter };
