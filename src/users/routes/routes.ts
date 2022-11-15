import { IMiddleware } from 'koa-router';
import { usersController } from '..';
import { createRouter } from '../../core/configs';
import { User } from '../entities/user.entity';

const USERS_URL = 'users';

const router = createRouter(USERS_URL);

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

const filterUserObject: IMiddleware = (ctx, next) => {
  if (!ctx.url.includes('/users')) {
    return next();
  }

  if (ctx.response.body === null) {
    return next();
  }

  const body: User | User[] = ctx.response.body;

  if (Array.isArray(body)) {
    // We have to map a list of users
    ctx.response.body = (body as User[]).map((user) => User.toDto(user));
  } else {
    // We only have a user object to handle
    ctx.response.body = User.toDto(body);
  }

  return next();
};

export { router as usersRouter, filterUserObject };
