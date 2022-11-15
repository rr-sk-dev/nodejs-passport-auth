import { IMiddleware } from 'koa-router';
import { UsersService } from '../service/users.service';

// TODO: input validations (sanitize, check agains the model, etc..)
// ! https://www.npmjs.com/package/koa-joi-router

export class UsersController {
  constructor(private usersService: UsersService) {}

  getUsers: IMiddleware = async (ctx, next): Promise<void> => {
    ctx.body = await this.usersService.getUsers();
    next();
  };

  getUser: IMiddleware = async (ctx, next): Promise<void> => {
    ctx.body = await this.usersService.getUser(ctx.params.id);
    next();
  };

  createUser: IMiddleware = async (ctx, next): Promise<void> => {
    ctx.body = await this.usersService.createUser(ctx.request.body);
    next();
  };

  updateUser: IMiddleware = async (ctx, next): Promise<void> => {
    ctx.body = await this.usersService.updateUser(ctx.params.id, ctx.request.body);
    next();
  };

  deleteUser: IMiddleware = async (ctx, next): Promise<void> => {
    ctx.body = await this.usersService.deleteUser(ctx.params.id);
    next();
  };
}
